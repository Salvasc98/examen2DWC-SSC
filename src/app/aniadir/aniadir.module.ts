import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AniadirRoutingModule } from './aniadir-routing.module';
import { AniadirPorterosComponent } from './aniadir-porteros/aniadir-porteros.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AniadirPorterosComponent
  ],
  imports: [
    CommonModule,
    AniadirRoutingModule,
    ReactiveFormsModule
  ]
})
export class AniadirModule { }
