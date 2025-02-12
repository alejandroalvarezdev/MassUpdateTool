import { Component, NgModule } from '@angular/core';
import { SolutionsModule } from '../solutions.module';
import { ConsumeService } from '../../consume.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import Papa from 'papaparse';
import { from } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
// --- Components --- 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




export class AppModule {}
@Component({
  selector: 'app-custom-update',
  imports: [SolutionsModule,CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './custom-update.component.html',
  styleUrl: './custom-update.component.css',
})
export class CustomUpdateComponent {
// Global
customResponse : any; 
csvRecords: any[] = [];  // Aquí almacenaremos los registros leídos
segmentedRecords: any[][] = []; // Array para almacenar los bloques de 100



  constructor(private consume:ConsumeService){
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
  segmentData(): void {
    this.segmentedRecords = []; // Reiniciar antes de segmentar

    for (let i = 0; i < this.csvRecords.length; i += 100) {
      this.segmentedRecords.push(this.csvRecords.slice(i, i + 100));
    }

    console.log('Registros segmentados:', this.segmentedRecords);
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
        this.consume.massiveUpdate("Leads",payload).subscribe(
          (response) => {
            console.log(`Bloque ${index + 1} enviado con éxito`, response);
            resolve(true);
          },
          (error) => {
            console.error(`Error al enviar el bloque ${index + 1}`, error);
            resolve(false);
          }
        );
      }, 5000); // Delay de 5 segundos
    });

  }
}
