import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { AppRoutingModule } from "./clientes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ]
  declarations: [ClienteComponent, ClienteListComponent]
})
export class ClientesModule { }
