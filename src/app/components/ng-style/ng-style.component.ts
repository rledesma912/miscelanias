import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p style="font-size: .300em;">
  Hola mundo gentile... esta es una etiqueta.
  </p>

  <p [ngStyle]="{'font-size': + tamanio1 + 'px'}">
  Otra vez mundo gentile...
  </p>

  <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
    <i class="fa fa-plus"></i>
  </button>
  <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
    <i class="fa fa-minus"></i>
  </button>

  <p [style.fontSize.px]="tamanio">
  Nuevamente el mundo gentile...
  </p>
  `,
  styleUrls: []
})
export class NgStyleComponent implements OnInit {

  tamanio1: number = 15;
  tamanio: number = 19;

  constructor() { }

  ngOnInit() {
  }

}
