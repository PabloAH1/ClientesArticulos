import { Injectable } from '@angular/core';
import { Compra } from '../interfaces/compra.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  compras:Compra[]=[];
  nuevo:Compra={
    codCliente:0,
    codArticulo:0,
    fecha:"",
    unidades:0}

   constructor() {this.compras=this.getCompraDefault(); }
   compraDefault:Compra[]=[];

  getCompraDefault():Compra[]{
    return this.compraDefault;
  }
  getAllCompras():Compra[]{
    return this.compras;
  }
  getCompra(codCliente:number,codArticulo:number,fecha:string){
    return this.compras.find(comp=>comp.codCliente===+codCliente && comp.codArticulo===+codArticulo);
  }
  addCompra(compraNueva:Compra):void{
    let compra:Compra={
      codCliente: compraNueva.codCliente,
      codArticulo: compraNueva.codArticulo,
      fecha: compraNueva.fecha,
      unidades: compraNueva.unidades
    }
    this.compras.push(compra);
  }
  deleteCompra(idCliente:number,idArticulo:number,fecha:string):void{
    for (let i = 0; i < this.compras.length; i++) {
      if(this.compras[i].codCliente===idCliente && this.compras[i].codArticulo===idArticulo
        && this.compras[i].fecha==fecha)
        this.compras.splice(i,1);
    }
   }

}
