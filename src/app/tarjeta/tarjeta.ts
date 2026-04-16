import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  @Input() botonDeshabilitado: boolean = false;
  @Input() imagenURL: string = '';
  @Input() altImagen: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';

  @Output() agrandarImagen = new EventEmitter<string>();

  MandarImagen() {
    this.agrandarImagen.emit(this.imagenURL);
  }
}
