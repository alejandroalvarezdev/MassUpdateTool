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
//CSV Parser
import Papa from 'papaparse';
import { concatMap, from } from 'rxjs';
//SQID
import Sqids from 'sqids';
import { EstimacionesMaperService } from '../../services/estimaciones-maper.service';


interface Estimaciones{};

@Component({
  selector: 'app-single-update',
  imports: [SolutionsModule,
    CommonModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})



export class SinglePostComponent implements OnInit {

  // Global 
  csvRecords: any[] = [];  // Aquí almacenaremos los registros leídos
  form: FormGroup;
  

  encodesquids:any;


  constructor(private consume:ConsumeService,private fb: FormBuilder, private estimacionesMap:EstimacionesMaperService){
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
  


  
  
  // Transform to API Name Model 

  
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
        
        const payload = { "data":[transformedObj] };
        
        
        // const mergedObj = Object.assign({}, record, this.segmentRelationShips(record) );

        // console.log(`Registro ${index + 1} enviado con éxito`);
        // console.log(`Data ${payload}`);
        // console.log(this.transformEstimacionesModel(transformedObj));
        
        console.log("Original",payload);
        console.warn(this.estimacionesMap.mapearEstimacion(transformedObj)); 
        
        // console.log("Merged payload" , mergedObj)

        
        // this.consume.singleUpdate(this.form.value.name, payload).subscribe(
        //   (response) => {
        //     console.log(`Registro ${index + 1} enviado con éxito`, response);
        //     resolve(true);
        //   },
        //   (error) => {
        //     console.error(`Error al enviar el registro ${index + 1}`, error);
        //     resolve(false);
        //   }
        // );
        resolve(true);
      }, 500); // Simula una espera de 500ms por cada envío
  
    
    });
  }
  
  


}
