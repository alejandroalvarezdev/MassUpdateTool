//CORE
import { Component, OnInit } from '@angular/core';
import { SolutionsModule } from '../solutions.module';
import { ConsumeService } from '../../services/consume.service';
import { CommonModule } from '@angular/common';
// Components
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
//CSV Parser
import Papa from 'papaparse';
import { concatMap,finalize, from } from 'rxjs';
//SQID
import Sqids from 'sqids';
// Mapper services  
import { EstimacionesMaperService } from '../../services/estimaciones-maper.service';
import { OportunidadesMaperService } from '../../services/oportunidades-maper.service';
// Mapper models 
import { Oportunidades } from '../../models/oportunidades.model';
import { OportunidadesApi } from '../../models/oportunidades-api.model';
import { ContactosApi } from '../../models/contactos-api.model';
import { EstimacionesAPI } from '../../models/estimaciones-api.model';
import { ProspectosApi } from '../../models/prospectos-api.model';
import { Contactos } from '../../models/contactos.model';
import { ContactosMaperService } from '../../services/contactos-maper.service';
type TipoOperacion = 'upsert' | 'zohoidModification';


@Component({
  selector: 'app-single-update',
  imports: [
    SolutionsModule,
    CommonModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatSlideToggleModule,
      MatCardModule,
      MatIconModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})



export class SinglePostComponent implements OnInit {

  // Global 
  csvRecords: any[] = [];  // Aquí almacenaremos los registros leídos
  form: FormGroup;
  segmentedRecords: any[][] = []; // Array para almacenar los bloques de 100
  datamodel:any;
  // Esta variable define que flujo se correrá si el Upsert o la actualización de ZohoID's
  esModoUpsert : TipoOperacion = 'upsert'; 


  //File Controller 
  selectedFile: File | null = null;
  //toggle button
  isChecked = false;

//Squids
  encodesquids:any;


  constructor(
    private consume:ConsumeService,
    private fb: FormBuilder,
    private estimacionesMap:EstimacionesMaperService,
    private oportunidadesMap:OportunidadesMaperService,
    private contactosMap:ContactosMaperService
  ){
      this.form = this.fb.group({
        name: ['', Validators.required],
        // updateType:['',Validators.required]
      });
    }
    ngOnInit() {
      const sqids = new Sqids({
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      })
      const id = sqids.encode([869301]) // "XRKUdQ"
      const numbers = sqids.decode(id) // [1, 2, 3]; 
      this.encodesquids = id; 

      console.warn(id);
      
    }

  onFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          console.log('CSV Result:', result);
          this.csvRecords = result.data;  // Guardamos los registros en el array
          this.segmentData();
        },
        header: true,  // Si la primera fila contiene los encabezados
      });
    }
  }
  segmentData(): void {
    this.segmentedRecords = []; // Reiniciar antes de segmentar

    for (let i = 0; i < this.csvRecords.length; i += 100) {
      this.segmentedRecords.push(this.csvRecords.slice(i, i + 100));
    }

    console.log('Registros segmentados:', this.segmentedRecords);
    this.datamodel = this.segmentedRecords.pop();
  }
  onSubmit(){
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);

      this.sendDataToAPI();
    } else {
      console.log('Form is invalid');
    }
  }
  sendDataToAPI(): void {
    from(this.segmentedRecords) // Emitir cada registro individualmente
      .pipe(
        concatMap((record, index) => this.launchData(record, index)), // Procesa cada registro en orden
        finalize(() => {
          this.esModoUpsert = 'zohoidModification'; 
          console.log('Todos los registros han sido procesados por Upsert');
          // Después de que todos los registros han sido procesados, ejecutamos la segunda función
          from(this.segmentedRecords) // Emitir cada registro nuevamente
            .pipe(
              concatMap((record, index) => this.uploadZohoIDs(record, index)) // Ejecutar otra función
            )
            .subscribe(); // No olvides suscribirte a este segundo observable
        })
      )
      .subscribe(); // Primero, la suscripción principal
  }
  
  map2ApiObject(obj: any, objType: string) {
    let result:OportunidadesApi|EstimacionesAPI|ContactosApi|ProspectosApi|undefined; 

    switch (objType) {
      case 'Leads':
        // Lógica para cuando objType es "Leads"
        console.log('Procesando Leads:', obj);
        break;

        case 'Contacts':
          console.log(this.esModoUpsert);
          
          let objetoMepeadoCon: ContactosApi;
          const objetoContactos = obj as unknown as Contactos;
        
          if (this.esModoUpsert === 'zohoidModification') {
            // En el caso de zohoidModification, la lógica se realiza de forma asincrónica
            this.contactosMap.zohoIDsUpdateContacts(objetoContactos).then((resultado) => {
              console.log(JSON.stringify(resultado));  // 'Operación exitosa'
            })
            .catch((error) => {
              console.error(error);  // 'Hubo un error' si algo sale mal
            });
        
          } else { // En el caso de 'Upsert'
            // Si no es 'zohoidModification', simplemente mapeamos el objeto
            objetoMepeadoCon = this.contactosMap.mapearContactos(objetoContactos);
        
            // Ordenamos las propiedades de la misma manera
            let propiedadesOrdenadasCon = Object.entries(objetoMepeadoCon).sort((a, b) => {
              if (a[0] === 'owner_bridge_id') return -1; // Mueve 'owner_bridge_id' al principio
              return 0; // Mantén el orden de las demás propiedades
            });
        
            // Creamos el objeto ordenado
            let objetoOrdenadoCon: any = {};
            propiedadesOrdenadasCon.forEach(([clave, valor]) => {
              objetoOrdenadoCon[clave] = valor;
            });
        
            // Agregamos campos adicionales
            objetoOrdenadoCon["duplicate_check_fields"] = ["owner_bridge_id"];
            objetoOrdenadoCon["trigger"] = [];
        
            result = objetoOrdenadoCon;  // Asignamos el objeto final a `result`
          }
          break;
        
      case 'Deals':
        // el Objeto lo declaramos como de tipo Oportunidades
        const objetoOportunidades = obj as unknown as Oportunidades;
        let objetoMapeadoOp = this.oportunidadesMap.mapearOportunidad(objetoOportunidades);
        // console.log(objetoMapeado);
          let propiedadesOrdenadasOp = Object.entries(objetoMapeadoOp).sort((a, b) => {
            if (a[0] === 'Deal_Name') return -1; // Mueve 'nombre' al principio
            return 0; // Mantén el orden de las demás propiedades
          });
             // Reconstruir el objeto a partir de las propiedades ordenadas
          let objetoOrdenadoOp: any = {};
          propiedadesOrdenadasOp.forEach(([clave, valor]) => {
              objetoOrdenadoOp[clave] = valor;
          });
          objetoOrdenadoOp["duplicate_check_fields"] = ["Deal_Name"];
          objetoOrdenadoOp["trigger"] = [];  // Esto desactiva los triggers

          result = objetoOrdenadoOp; // Aquí se asigna el objeto ordenado a result
    break;
        
      case 'Estimaciones':
        // Lógica para cuando objType es "Estimaciones"
        console.log('Procesando Estimaciones:', obj);
        break;

        

      default:
        console.log('Tipo no reconocido:', objType);
        break;
    }
    return result;
  }
  uploadZohoIDs(record:any,index:number){
    return new Promise(resolve => {
      console.log(`Zoho Api Update...`); // Mostrar cada registro en consola
      
      setTimeout(() => {
        
        let payload: any = {};  // Cambiar a un objeto, no un arreglo
        let segmentedRecords: Array<any> = record; 
        let dataArray: Array<any> = [];  // Aquí vamos a acumular los objetos transformados
  
        segmentedRecords.forEach(r => {
          // Transformación del objeto
          
  
          // Mapeamos el objeto transformado
          const mappedObject = this.map2ApiObject(r, this.form.value.name);
          
          // Agregamos el objeto mapeado al arreglo `dataArray`
          dataArray.push(mappedObject);
        });
  
        // Asignamos directamente la propiedad "data" a payload sin corchetes extra
        payload.data = dataArray;
  
        // Si `this.isChecked` es true, enviamos el registro a la API
        if (this.isChecked == true) {
          this.consume.upsertRecord(this.form.value.name, payload).subscribe(
            (response) => {
              console.log(`Registro ${index + 1} enviado con éxito`, response);
              resolve(true);
            },
            (error) => {
              console.error(`Error al enviar el registro ${index + 1}`, error);
              console.error(`Failed payload  ${JSON.stringify(payload)}`);
              resolve(false);
            }
          );
        }
        // Si `this.isChecked` es false, solo mostramos el payload en consola
        if (this.isChecked == false) {
          console.warn("Payload", payload);
        }
  
        resolve(true); // Resolvemos la promesa
  
      }, 500); //  espera de 500ms por cada envío
      resolve(true)
    });
  }
  
  launchData(record: any, index: number) {
    return new Promise(resolve => {
      console.log(`Enviando...`); // Mostrar cada registro en consola
      
      // Simulación de consumo de API
      setTimeout(() => {
        
        let payload: any = {};  // Cambiar a un objeto, no un arreglo
        let segmentedRecords: Array<any> = record; 
        let dataArray: Array<any> = [];  // Aquí vamos a acumular los objetos transformados
  
        segmentedRecords.forEach(r => {
          // Transformación del objeto
          const transformedObj = Object.entries(r)
            .reduce<Record<string, { id: string } | string | boolean>>((acc, [key, value]) => {
              if (typeof value === 'string') {
                if (key.startsWith('Obj')) {
                  const newKey = key.replace(/^Obj/, ''); // Elimina "Obj" solo si está al inicio
                  acc[newKey] = { id: value }; // Transforma a { id: valor }
                }
                else if (value.toLowerCase() === 'true') {
                  acc[key] = true;
                } else if (value.toLowerCase() === 'false') {
                  acc[key] = false;
                }
                else {
                  acc[key] = value; // Mantiene las claves sin "Obj" tal como están
                }
              }
              return acc;
            }, {});
  
          // Mapeamos el objeto transformado
          const mappedObject = this.map2ApiObject(transformedObj, this.form.value.name);
          
          // Agregamos el objeto mapeado al arreglo `dataArray`
          dataArray.push(mappedObject);
        });
  
        // Asignamos directamente la propiedad "data" a payload sin corchetes extra
        payload.data = dataArray;
  
        // Si `this.isChecked` es true, enviamos el registro a la API
        if (this.isChecked == true) {
          this.consume.upsertRecord(this.form.value.name, payload).subscribe(
            (response) => {
              console.log(`Registro ${index + 1} enviado con éxito`, response);
              resolve(true);
            },
            (error) => {
              console.error(`Error al enviar el registro ${index + 1}`, error);
              console.error(`Failed payload  ${JSON.stringify(payload)}`);
              resolve(false);
            }
          );
        }
  
        // Si `this.isChecked` es false, solo mostramos el payload en consola
        if (this.isChecked == false) {
          console.warn("Payload", payload);
        }
        
        
        resolve(true); // Resolvemos la promesa
  
      }, 500); // Simula una espera de 500ms por cada envío
      
    });
    
  }
  
  
  


}
