import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';


@NgModule({
  declarations: [
    ListaPorterosComponent
  ],
  imports: [
    CommonModule,
    ListaRoutingModule
  ]
})
export class ListaModule { }
