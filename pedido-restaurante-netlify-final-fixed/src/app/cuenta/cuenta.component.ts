import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  @Input() platos: any[] = [];

  get total(): number {
    return this.platos.reduce((suma, p) => suma + Number(p.precio), 0);
  }
}
