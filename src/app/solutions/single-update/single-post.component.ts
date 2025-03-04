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
import { concatMap, from } from 'rxjs';
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


@Component({
  selector: 'app-single-update',
  imports: [SolutionsModule,
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
    private oportunidadesMap:OportunidadesMaperService){
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
    from(this.csvRecords) // Emitir cada registro individualmente
      .pipe(
        concatMap((record, index) => this.launchData(record, index)) // Procesa cada registro en orden
      )
      .subscribe();
  }
  
  map2ApiObject(obj: any, objType: string) {
    let result:OportunidadesApi|EstimacionesAPI|ContactosApi|ProspectosApi|undefined; 

    switch (objType) {
      case 'Leads':
        // Lógica para cuando objType es "Leads"
        console.log('Procesando Leads:', obj);
        break;
      case 'Deals':
        // el Objeto lo declaramos como de tipo Oportunidades
        const objetoOportunidades = obj as unknown as Oportunidades;
        let objetoMapeado = this.oportunidadesMap.mapearOportunidad(objetoOportunidades);
        console.log(objetoMapeado);
          let propiedadesOrdenadas = Object.entries(objetoMapeado).sort((a, b) => {
            if (a[0] === 'Deal_Name') return -1; // Mueve 'nombre' al principio
            return 0; // Mantén el orden de las demás propiedades
          });
             // Reconstruir el objeto a partir de las propiedades ordenadas
          let objetoOrdenado: any = {};
          propiedadesOrdenadas.forEach(([clave, valor]) => {
              objetoOrdenado[clave] = valor;
          });
          objetoOrdenado["duplicate_check_fields"] = ["Deal_Name"];
          objetoOrdenado["trigger"] = [];  // Esto desactiva los triggers

          result = objetoOrdenado; // Aquí se asigna el objeto ordenado a result
    break;
        
      case 'Estimaciones':
        // Lógica para cuando objType es "Estimaciones"
        console.log('Procesando Estimaciones:', obj);
        break;
      case 'Oportunidades':
        // Lógica para cuando objType es "Oportunidades"
        console.log('Procesando Oportunidades:', obj);
        break;
      default:
        console.log('Tipo no reconocido:', objType);
        break;
    }
    return result;
  }
  
  launchData(record: any, index: number) {
    return new Promise(resolve => {
      console.log(`Enviando...`); // Mostrar cada registro en consola
      
      // Simulación de consumo de API
      setTimeout(() => {
        

              
        const transformedObj = Object.entries(record)
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
        
        // Object to send 
        const payload = { "data":[this.map2ApiObject(transformedObj,this.form.value.name)] };

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
        if(this.isChecked == false){
          // Mapeador 
          console.warn(this.map2ApiObject(transformedObj,this.form.value.name))
          
        } 
        
        resolve(true);
      }, 500); // Simula una espera de 500ms por cada envío
  
    
    });
  }
  
  


}
