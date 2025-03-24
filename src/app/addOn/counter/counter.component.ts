import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: any = 0;  // El contador comienza en 0
  private intervalId: any;  // Para guardar el ID del intervalo

  ngOnInit(): void {
  }
  // @Input() activateCounter: boolean = false;  // Recibimos la señal de activación
  

  // startAutoIncrement() {
  //   // Usamos setInterval para incrementar el contador cada segundo
  //   this.intervalId = setInterval(() => {
  //     this.counter++;
  //   }, 1000);
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   // Solo incrementamos el contador cuando se activa
  //   if (changes['activateCounter'] && this.activateCounter) {
  //     this.counter++; // Incrementamos el contador una vez
  //   }
  // }
}
