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
import { concatMap,finalize, from,BehaviorSubject, map } from 'rxjs';
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
import { Estimaciones } from '../../models/estimaciones.model';
import { Prospectos } from '../../models/prospectos.model';
import { ProspectosMaperService } from '../../services/prospectos-maper.service';
import { LoaderComponent } from "../../addOn/loader/loader.component";
import { CounterComponent } from '../../addOn/counter/counter.component';
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
    MatIconModule,
    LoaderComponent,
    CounterComponent
],
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
  //loader manager
    loading: boolean = false; // Por defecto, el loader se muestra
    // Progress manager
    progressLaunch: number = 0; // Progreso para el proceso de launchData
    progressUpload: number = 0; // Progreso para el proceso de uploadZohoIDs
  // Counter Manager
  activateCounter:boolean = false;



//Squids
  encodesquids:any;


  constructor(
    private consume:ConsumeService,
    private fb: FormBuilder,
    private estimacionesMap:EstimacionesMaperService,
    private oportunidadesMap:OportunidadesMaperService,
    private contactosMap:ContactosMaperService,
    private prospectosMap:ProspectosMaperService
  ){
      this.form = this.fb.group({
        name: ['', Validators.required],
        // updateType:['',Validators.required]
      });
    }
    ngOnInit() {
      this.activateCounter = true;
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
    if (this.csvRecords.length < 100) {
      this.segmentedRecords = this.csvRecords
    }else{
      for (let i = 0; i < this.csvRecords.length; i += 100) {
        this.segmentedRecords.push(this.csvRecords.slice(i, i + 100));
      }
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
  //Orquestador
  sendDataToAPI(): void {
    const progressLaunchSubject = new BehaviorSubject(0); // Progreso para launchData
    const progressUploadSubject = new BehaviorSubject(0); // Progreso para uploadZohoIDs
    let under10storage:Array<any> = [];
    // Suscribir al progreso de launchData
    progressLaunchSubject.subscribe(progress => {
      this.progressLaunch = progress; // Actualiza el progreso de launchData
    });

    // Suscribir al progreso de uploadZohoIDs
    progressUploadSubject.subscribe(progress => {
      this.progressUpload = progress; // Actualiza el progreso de uploadZohoIDs
    });
    under10storage.push(this.segmentedRecords);
    if (this.csvRecords.length < 100) {
      this.segmentedRecords = under10storage;
    }

    // Primer flujo: launchData
    from(this.segmentedRecords)
      .pipe(
        concatMap((record, index) => this.launchData(record, index)),
        map((value, index) => {
          const progress = ((index + 1) / this.segmentedRecords.length) * 100;
          progressLaunchSubject.next(progress); // Emitir el progreso de launchData
          return value;
        }),
        finalize(() => {
          this.esModoUpsert = 'zohoidModification';
          console.log('Todos los registros han sido procesados por Upsert');

          // Segundo flujo: uploadZohoIDs
          from(this.segmentedRecords)
            .pipe(
              concatMap((record, index) => this.uploadZohoIDs(record, index)),
              map((value, index) => {
                const progress = ((index + 1) / this.segmentedRecords.length) * 100;
                progressUploadSubject.next(progress); // Emitir el progreso de uploadZohoIDs
                return value;
              })
            )
            .subscribe({
              next: () => {},
              error: (err) => {
                console.error('Error en el flujo de uploadZohoIDs:', err);
                progressUploadSubject.complete(); // Completar el progreso si hay error
              },
              complete: () => {
                console.log('Todos los registros han sido cargados a Zoho');
                progressUploadSubject.complete(); // Completar el progreso cuando termine
              }
            });
        })
      )
      .subscribe({
        next: () => {},
        error: (err) => {
          console.error('Error procesando los registros de launchData:', err);
          progressLaunchSubject.complete(); // Completar si hay error
        },
        complete: () => {
          console.log('Todos los registros han sido procesados');
          progressLaunchSubject.complete(); // Completar cuando termine
        }
      });
  }
  updateProgressBar(progress: number): void {
    // Implementa esta función para actualizar la interfaz de usuario
    // Podría ser un elemento HTML con una barra de progreso, o cualquier otro tipo de visualización
    console.log(`Progreso: ${progress}%`);
    // Aquí actualizamos la barra de progreso visualmente, ejemplo:
    // document.getElementById('progressBar').style.width = `${progress}%`;
  }
  // Map & Parse Objects
  map2ApiObject(obj: any, objType: string) {
    let result:OportunidadesApi|EstimacionesAPI|ContactosApi|ProspectosApi|undefined; 
    switch (objType) {
      case 'Leads':
        console.log(this.esModoUpsert);
          
          let objetoMepeadoLds: ProspectosApi;
          const objetoProspectos = obj as unknown as Prospectos;

          // Si no es 'zohoidModification', simplemente mapeamos el objeto
          objetoMepeadoLds = this.prospectosMap.mapearProspectos(objetoProspectos);
                  
          // Ordenamos las propiedades de la misma manera
          let propiedadesOrdenadasLds = Object.entries(objetoMepeadoLds).sort((a, b) => {
            if (a[0] === 'owner_bridge_id') return -1; // Mueve 'owner_bridge_id' al principio
            return 0; // Mantén el orden de las demás propiedades
          });
                  
          // Creamos el objeto ordenado
          let objetoOrdenadoPor: any = {};
          propiedadesOrdenadasLds.forEach(([clave, valor]) => {
            objetoOrdenadoPor[clave] = valor;
          });
                  
          // Agregamos campos adicionales
          objetoOrdenadoPor["duplicate_check_fields"] = ["owner_bridge_id"];
          // objetoOrdenadoPor["trigger"] = [];

          result = objetoOrdenadoPor;  // Asignamos el objeto final a `result`

          break;


      case 'Contacts':
          console.log(this.esModoUpsert);
          
          let objetoMepeadoCon: ContactosApi;
          const objetoContactos = obj as unknown as Contactos;
        

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
            // objetoOrdenadoCon["trigger"] = [];
        
            result = objetoOrdenadoCon;  // Asignamos el objeto final a `result`
          
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
          // objetoOrdenadoOp["trigger"] = [];  // Esto desactiva los triggers

          result = objetoOrdenadoOp; // Aquí se asigna el objeto ordenado a result
    break;
        
      case 'Estimaciones':
        console.log(this.esModoUpsert);

        let objetoMepeadoEst: EstimacionesAPI;
        const objetoEstimaciones = obj as unknown as Estimaciones;

        // Si no es 'zohoidModification', simplemente mapeamos el objeto
        objetoMepeadoEst = this.estimacionesMap.mapearEstimacion(objetoEstimaciones);

        // Ordenamos las propiedades de la misma manera
              let propiedadesOrdenadasEst = Object.entries(objetoMepeadoEst).sort((a, b) => {
                if (a[0] === 'MortgageID') return -1; // Mueve 'owner_bridge_id' al principio
                return 0; // Mantén el orden de las demás propiedades
              });

              // Creamos el objeto ordenado
              let objetoOrdenadoEst: any = {};
              propiedadesOrdenadasEst.forEach(([clave, valor]) => {
                objetoOrdenadoEst[clave] = valor;
              });

              // Agregamos campos adicionales
              objetoOrdenadoEst["duplicate_check_fields"] = ["MortgageID"];
        // objetoOrdenadoEst["trigger"] = [];

        result = objetoOrdenadoEst;  // Asignamos el objeto final a `result`

  break;


        

      default:
        console.log('Tipo no reconocido:', objType);
        break;
    }
    return result;
  }
  async map2ApiObjectZohoIDs(obj: any, objType: string) {
    let result: OportunidadesApi | EstimacionesAPI | ContactosApi | ProspectosApi | undefined;
    console.warn(objType)
    switch (objType) {
        case 'Leads':
            // Lógica para cuando objType es "Leads"
            break;

        case 'Contacts':
            const objetoContactos = obj as unknown as Contactos;
          let objetoMapeadoCon:any;

            objetoMapeadoCon   = await this.contactosMap.zohoIDsUpdateContacts(objetoContactos)
                .then((resultado:any) => {
                  let propiedadesOrdenadasCon = Object.entries(resultado).sort((a, b) => {
                    if (a[0] === 'owner_bridge_id') return -1; // Mueve 'owner_bridge_id' al principio
                    return 0; // Mantén el orden de las demás propiedades
                  });
                  
                  // Creamos un nuevo objeto con las propiedades ordenadas
                  let objetoOrdenadoCon: any = {};
                  propiedadesOrdenadasCon.forEach(([clave, valor]) => {
                    objetoOrdenadoCon[clave] = valor; // Asignamos cada propiedad al nuevo objeto
                  });
                  
                  // Agregamos campos adicionales al objeto
                  objetoOrdenadoCon["duplicate_check_fields"] = ["owner_bridge_id"]; // Campo adicional
                  // objetoOrdenadoCon["trigger"] = []; // Otro campo adicional
                  
                  // Asignamos el objeto final ordenado a 'result'
                  result = objetoOrdenadoCon;
                })
                .catch((error) => {
                    console.error(error);
                    return {} as ContactosApi; // 👈 Retornamos un objeto vacío en caso de error
                });
            break;

        case 'Deals':
          const objetoOportunidades = obj as unknown as Oportunidades;
          let objetoMapeadoOp: any;
          
          objetoMapeadoOp = await this.oportunidadesMap.zohoIDsUpdateDeal(objetoOportunidades)
            .then((resultado: any) => {
              let propiedadesOrdenadasOp = Object.entries(resultado).sort((a, b) => {
                if (a[0] === 'contract_bridge_id') return -1; // Mueve 'owner_bridge_id' al principio
                return 0; // Mantén el orden de las demás propiedades
              });
          
              // Creamos un nuevo objeto con las propiedades ordenadas
              let objetoOrdenadoOp: any = {};
              propiedadesOrdenadasOp.forEach(([clave, valor]) => {
                objetoOrdenadoOp[clave] = valor; // Asignamos cada propiedad al nuevo objeto
              });
          
              // Agregamos campos adicionales al objeto
              objetoOrdenadoOp["duplicate_check_fields"] = ["contract_bridge_id"]; // Campo adicional
              // objetoOrdenadoOp["trigger"] = []; // Otro campo adicional
          
              // Asignamos el objeto final ordenado a 'result'
              result = objetoOrdenadoOp;
            })
            .catch((error) => {
              console.error(error);
              return {} as OportunidadesApi; // 👈 Retornamos un objeto vacío en caso de error
            });
          
            break;

        case 'Estimaciones':
          const objetoEstimaciones = obj as unknown as Estimaciones;
          let objetoMapeadoEst: any;
          
          objetoMapeadoEst = await this.estimacionesMap.zohoIDsUpdateEstimaciones(objetoEstimaciones)
            .then((resultado: any) => {
              let propiedadesOrdenadasEst = Object.entries(resultado).sort((a, b) => {
                if (a[0] === 'MortgageID') return -1; // Mueve 'owner_bridge_id' al principio
                return 0; // Mantén el orden de las demás propiedades
              });
          
              // Creamos un nuevo objeto con las propiedades ordenadas
              let objetoOrdenadoEst: any = {};
              propiedadesOrdenadasEst.forEach(([clave, valor]) => {
                objetoOrdenadoEst[clave] = valor; // Asignamos cada propiedad al nuevo objeto
              });
          
              // Agregamos campos adicionales al objeto
              objetoOrdenadoEst["duplicate_check_fields"] = ["MortgageID"]; // Campo adicional
              // objetoOrdenadoEst["trigger"] = []; // Otro campo adicional
          
              // Asignamos el objeto final ordenado a 'result'
              result = objetoOrdenadoEst;
            })
            .catch((error) => {
              console.error(error);
              return {} as EstimacionesAPI; // 👈 Retornamos un objeto vacío en caso de error
            });
          
          break;
          

        default:
            console.warn('Tipo de objeto no reconocido:', objType);
            break;
    }

    return result; // ✅ Devolvemos el resultado correcto según el tipo de objeto
}
  
  async  processRecords(segmentedRecords:any) {
    let dataArray:Array<any> =[]; 
    // Creamos un array de promesas que se resolverán cuando cada operación asíncrona termine
    let promises = segmentedRecords.map(async (r:any) => {
      try {
        // Llamamos a la función `map2ApiObjectZohoIDs` y esperamos que se resuelva la promesa
        const mappedObject = await this.map2ApiObjectZohoIDs(r, this.form.value.name);
        
        // Agregamos el objeto mapeado al arreglo `dataArray`
        dataArray.push(mappedObject);
        // console.log('Objeto mapeado:', mappedObject);
      } catch (error) {
        console.error('Error en la transformación del objeto', error);
      }
    });
  
    // Esperamos que todas las promesas se resuelvan antes de mostrar dataArray
    try {
      await Promise.all(promises);
      console.table('Objeto dataArray lleno:', dataArray);
      return dataArray;
    } catch (error) {
      console.error('Hubo un error al procesar los registros', error);
      return[]; 
    }
  }

  // Launch Data
  launchData(record: any, index: number) {
    return new Promise(resolve => {
      console.log(`Enviando...`); // Mostrar cada registro en consola
      
      // Simulación de consumo de API
      setTimeout(() => {
        
        let payload: any = {};  // Cambiar a un objeto, no un arreglo
        let segmentedRecords: Array<any> = record; 
        let dataArray: Array<any> = [];  // Aquí vamos a acumular los objetos transformados
        
        segmentedRecords.forEach(r => {
          // Mapeamos el objeto 
          const mappedObject = this.map2ApiObject(r, this.form.value.name);
          
          // Agregamos el objeto mapeado al arreglo `dataArray`
          dataArray.push(mappedObject);
        });
  
        // Asignamos directamente la propiedad "data" a payload sin corchetes extra
        payload.data = dataArray;
        payload.trigger = [];
  
        // Si `this.isChecked` es true, enviamos el registro a la API
        if (this.isChecked == true) {
          this.consume.upsertRecord(this.form.value.name, payload).subscribe(
            (response) => {
              console.log(`Registro ${index + 1} enviado con éxito`, response);
              console.warn(payload)
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
          console.warn("Payload Upsert", payload);
        }
        
        
        resolve(true); // Resolvemos la promesa
  
      }, 500); // Simula una espera de 500ms por cada envío
      
    });
    
  }
  async uploadZohoIDs(record: any, index: number) {
    console.log(`Zoho Api Update...`); // Mostrar cada registro en consola
    this.loading = true; 
    let payload: any = {};  // Cambiar a un objeto, no un arreglo
    let segmentedRecords: Array<any> = record;
    let dataArray: Array<any> = [];  // Aquí vamos a acumular los objetos transformados
    
    payload.data = await this.processRecords(segmentedRecords);
    payload.trigger = [];
    console.warn(await payload);
    this.loading = false; 

    
    // Si `this.isChecked` es true, enviamos el registro a la API
    if (this.isChecked) {
      try {
        const response = await this.consume.upsertRecord(this.form.value.name, payload).toPromise();
        console.log(`Registro ${index + 1} enviado con éxito`, response);
        return true;
      } catch (error) {
        console.error(`Error al enviar el registro ${index + 1}`, error);
        console.error(`Failed payload  ${JSON.stringify(payload)}`);
        return false;
      }
    }
  
    // Si `this.isChecked` es false, solo mostramos el payload en consola
    if (!this.isChecked) {
      // console.warn("Payload Zoho Udpade", payload);
    }
  
    return true; // Al final resolvemos la promesa
  }
  
  


}
