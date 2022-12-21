import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista', loadChildren: () => import('./lista/lista.module').
                                          then(m => m.ListaModule)
  },
  {
    path: 'aniadir', loadChildren: () => import('./aniadir/aniadir.module').
                                          then(m => m.AniadirModule)
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
