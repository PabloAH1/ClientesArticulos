import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CompraComponent } from './compra/compra.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CompraComponent,
    NavBarComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
