import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniadirPorterosComponent } from './aniadir-porteros/aniadir-porteros.component';

const routes: Routes = [
  {
    path: 'aniadir', component: AniadirPorterosComponent
  },
  /*{
    path: 'pelis/edit/:idPelicula', component: FormPeliculaComponent
  },*/
  {
    path: '**', redirectTo: 'lista', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AniadirRoutingModule { }
