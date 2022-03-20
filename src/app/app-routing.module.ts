import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CompraComponent } from './compra/compra.component';

const routes: Routes = [
  {
    path:'',
    component:ArticuloComponent,
    pathMatch:'full'
  },
  {
    path:'articulos',
    component:ArticuloComponent
  },
  {
    path:'clientes',
    component:ClientesComponent
  },
  {
    path:'compras',
    component:CompraComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
