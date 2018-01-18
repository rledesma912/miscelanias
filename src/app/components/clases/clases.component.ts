import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta:string = 'alert-danger';
  cargando:boolean = false;

  propiedades:Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.cargando = true;

    setTimeout( () => this.cargando = false, 3000 )
  }

}
