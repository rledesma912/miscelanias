import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//ElementRef es para manipular las propiedades del control en el templateUrl
//HostListener para escuchar eventos del control en el template
//Input es para declarar variables que llegan desde el template

@Directive({
  selector: '[appResaltado]'
})

export class ResaltadoDirective {
  //Propiedades visibles desde termplate
  @Input ("appResaltado") nuevoColor: string;

  constructor(private el:ElementRef) {
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor = "#999";
  }

  @HostListener('mouseenter') mouseEntro(){
    //"el" necesita this
    //this.el.nativeElement.style.backgroundColor = "#999";
    this.resaltar( this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    //"el" necesita this
    this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar( color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
