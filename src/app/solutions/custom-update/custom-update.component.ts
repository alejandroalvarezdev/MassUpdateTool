import { Component, NgModule } from '@angular/core';
import { SolutionsModule } from '../solutions.module';
import { ConsumeService } from '../../services/consume.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import Papa from 'papaparse';
import { from } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// --- Components --- 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';





export class AppModule {}
@Component({
  selector: 'app-custom-update',
  imports: [
    SolutionsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    
  ],
  templateUrl: './custom-update.component.html',
  styleUrl: './custom-update.component.css',
})
export class CustomUpdateComponent {
// Global
customResponse : any; 
csvRecords: any[] = [];  // Aquí almacenaremos los registros leídos
segmentedRecords: any[][] = []; // Array para almacenar los bloques de 100
form: FormGroup;
datamodel:any;

updateOptions: any[] = [
  {name: 'MultiUpdate', sound: '¡100*100 records * 1 object!'}  
];

  constructor(private consume:ConsumeService,private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      // updateType:['',Validators.required]
    });
  }
  ngOnInit(){
  
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          console.log('CSV Result:', result);
          this.csvRecords = result.data;  // Guardamos los registros en el array
          this.segmentData(); // Llamamos a la función de segmentación
        },
        header: true,  // Si la primera fila contiene los encabezados
      });
    }
  }
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      this.sendDataToAPI();
    } else {
      console.log('Form is invalid');
    }
  }
  segmentData(): void {
    this.segmentedRecords = []; // Reiniciar antes de segmentar
    if (this.csvRecords.length < 100) {
      this.segmentedRecords = this.csvRecords
    }else{
      for (let i = 0; i < this.csvRecords.length; i += 20) {
        this.segmentedRecords.push(this.csvRecords.slice(i, i + 20));
      }
    }
  }

  sendDataToAPI(): void {
    from(this.segmentedRecords)
    .pipe(
      concatMap((block, index) => 
        this.sendBlockWithDelay(block, index)
      )
    )
    .subscribe();
  }
  sendBlockWithDelay(block: any[], index: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        const payload = { data: block };
        console.warn(payload);
        
        this.consume.massiveUpdate(this.form.value.name,payload).subscribe(
          (response) => {
            console.log(`Bloque ${index + 1} enviado con éxito`, response);
            resolve(true);
          },
          (error) => {
            console.error(`Error al enviar el bloque ${index + 1}`, error);
            resolve(false);
          }
        );
      }, 1000); // Delay de 5 segundos
    });
    
  }


  
}
