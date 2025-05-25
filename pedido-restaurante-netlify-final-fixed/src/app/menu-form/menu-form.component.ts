import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent {
  @Output() platoAgregado = new EventEmitter<any>();

  nombre = '';
  tipo = 'Principal';
  precio = 0;

  agregarPlato() {
    const nuevo = {
      id: Date.now(),
      nombre: this.nombre,
      tipo: this.tipo,
      precio: this.precio
    };
    this.platoAgregado.emit(nuevo);
    this.nombre = '';
    this.tipo = 'Principal';
    this.precio = 0;
  }
}
