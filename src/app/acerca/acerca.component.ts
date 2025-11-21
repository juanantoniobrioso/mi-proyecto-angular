import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent {

contador : number = 0;
resultado : string="";


opcionSeleccionada: string = '';
actualizarOpcion(evento: Event){
  const selectElement = evento.target as HTMLSelectElement;
  this.opcionSeleccionada = selectElement.value;
}


mensajeFoco: string = '';
mostrarFoco() {
this.mensajeFoco = 'Campo enfocado';
}
quitarFoco() {
this.mensajeFoco = 'Campo desenfocado';
}



incrementar(){
  this.contador++;
}
decrementar(){
  this.contador--;
}

actualizartexto(evento: Event){
  const inputElement = evento.target as HTMLInputElement;
  this.resultado=inputElement.value;
}






numero1 : number = 10;
numero2 : number = 0;


nombre: string = 'Angular';
obtenerMensaje(): string {
  return `Bienvenido a ${this.nombre}`;
}





}


