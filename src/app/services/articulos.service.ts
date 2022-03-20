import { Injectable } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulos:Articulo[]=[];

  constructor() {this.articulos=this.getArticuloDefault(); }

  articuloDefault:Articulo[]=[
    {
      codArticulo:12,
      nombre:"patata",
      descripcion:"brrr",
      precioUnidad:12,
      unidadesStock:22,
      stockSeguridad:33,
      imagen:"no hay",
    }
  ];
  getArticuloDefault():Articulo[]{
    return this.articuloDefault;
  }

  getAllArticulos():Articulo[]{
    return this.articulos;
  }
  getArticulo(codArticulo:number){
    return this.articulos.find(arti=>arti.codArticulo===+codArticulo);
  }
  addArticulo(articuloNuevo:Articulo):void{
    let articuloNew:Articulo={
      codArticulo: articuloNuevo.codArticulo,
      nombre: articuloNuevo.nombre,
      descripcion: articuloNuevo.descripcion,
      precioUnidad: articuloNuevo.precioUnidad,
      unidadesStock: articuloNuevo.unidadesStock,
      stockSeguridad: articuloNuevo.stockSeguridad,
      imagen: articuloNuevo.imagen
    }
    this.articulos.push(articuloNew);
   }
   deleteArticulo(idArticulo:number):void{
    for (let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codArticulo===idArticulo)
        this.articulos.splice(i,1);
    }
   }


}
