import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent {
  @Input() platos: any[] = [];
  @Output() eliminar = new EventEmitter<number>();
}
