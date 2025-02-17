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

@Component({
  selector: 'app-single-update',
  imports: [SolutionsModule,
    CommonModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,],
  templateUrl: './single-update.component.html',
  styleUrl: './single-update.component.css'
})


export class SingleUpdateComponent {

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
  

  launchData(record: any, index: number) {
    return new Promise(resolve => {
      console.log(`Enviando registro ${index + 1}:`, record); // Mostrar cada registro en consola
      
      // Simulación de consumo de API
      setTimeout(() => {
        
        const payload = { data:[ record] };
        // console.log(`Registro ${index + 1} enviado con éxito`);
        // console.log(`Data ${payload}`);
        // console.log(` RecordID ${record.id}`);
        // console.log(payload);
        
        
        this.consume.singleUpdate(this.form.value.name, payload).subscribe(
          (response) => {
            console.log(`Registro ${index + 1} enviado con éxito`, response);
            resolve(true);
          },
          (error) => {
            console.error(`Error al enviar el registro ${index + 1}`, error);
            resolve(false);
          }
        );
        resolve(true);
      }, 500); // Simula una espera de 500ms por cada envío
  
    
    });
  }
  

}
