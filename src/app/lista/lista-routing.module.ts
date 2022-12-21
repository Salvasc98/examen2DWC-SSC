import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';

const routes: Routes = [
  {
    path: 'lista', component: ListaPorterosComponent
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
export class ListaRoutingModule { }
