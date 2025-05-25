import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuFormComponent,
    PedidoListComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
