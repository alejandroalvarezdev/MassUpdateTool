import { Component } from '@angular/core';
import { SolutionsModule } from '../solutions.module';
import { ConsumeService } from '../../consume.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import Papa from 'papaparse';
import { concatMap, from } from 'rxjs';

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



export class SinglePostComponent {

  // Global 
  csvRecords: any[] = [];  // Aquí almacenaremos los registros leídos
  form: FormGroup;
 


  constructor(private consume:ConsumeService,private fb: FormBuilder){
      this.form = this.fb.group({
        name: ['', Validators.required],
        // updateType:['',Validators.required]
      });
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
  
  mapWithTransform<T>(
    data: any,
    mapping: { [K in keyof T]: { key: string; transform?: (value: any) => any } }
  ): T {
    return Object.fromEntries(
      Object.keys(mapping).map((key) => {
        const { key: originalKey, transform } = mapping[key as keyof T];  // ✅ Se tipa la clave
        return [key, transform ? transform(data[originalKey]) : data[originalKey]];
      })
    ) as T;  // Forzamos el tipo final a T para que coincida con la interfaz
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
        
        const payload = { "data":[transformedObj] };
        // const mergedObj = Object.assign({}, record, this.segmentRelationShips(record) );

        // console.log(`Registro ${index + 1} enviado con éxito`);
        // console.log(`Data ${payload}`);
        console.warn(payload);
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
