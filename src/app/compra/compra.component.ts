import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../interfaces/cliente.interfaces';
import { Compra } from '../interfaces/compra.interfaces';
import { ComprasService } from '../services/compras.service';
import { ArticulosService } from '../services/articulos.service';
import { Articulo } from '../interfaces/articulo.interfaces';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  compras:Compra[]=[];
  clientes:Cliente[]=[];
  articulos:Articulo[]=[];

  buscarCodCli!:number;
  buscarCodArt!:number;
  buscarFecha!:string;

  clienteSelect!:Cliente;
  articuloSelect!:Articulo;

  mostrarTodos:boolean=false;
  compraMostrar!:Compra;
  textoCompraBuscada!:string;
  indice:number=0;

  nuevo:Compra={
  codCliente:0,
  codArticulo:0,
  fecha:"",
  unidades:0
}
  constructor(
    private _compraService:ComprasService,
    private _clienteService:ClientesService,
    private _articuloService:ArticulosService
    ) { }

  ngOnInit(): void {
    this.compras=this._compraService.getAllCompras();
    this.clientes=this._clienteService.getAllClientes();
    this.articulos=this._articuloService.getAllArticulos();
  }
  onSelectCliente(cliente:Cliente):void{
    this.clienteSelect=cliente;
    this.nuevo.codCliente=cliente.codCliente;
  }
  onSelectArticulo(articulo:Articulo):void{
    this.articuloSelect=articulo;
    this.nuevo.codArticulo=articulo.codArticulo;
  }
  agregar():void{
    if (this.nuevo.codCliente!==0 && this.nuevo.codArticulo!==0 && this.nuevo.fecha!=""){
      this._compraService.addCompra(this.nuevo);
    }
  }
  mostrarTodasCompras():void{
    this.mostrarTodos=!this.mostrarTodos;
  }
  mostrar():void{
    let compraBuscada=this._compraService.getCompra(this.buscarCodCli,this.buscarCodArt,this.buscarFecha);
    this.textoCompraBuscada="CodCliente: "+compraBuscada!.codCliente+", CodArtículo: "+compraBuscada!.codArticulo+
    ", fecha: "+compraBuscada!.fecha+", Unidades: "+compraBuscada?.unidades;
  }
  eliminar():void{
    this._compraService.deleteCompra(this.buscarCodCli,this.buscarCodArt,this.buscarFecha);
  }
  limpiar():void{
    this.textoCompraBuscada="";
  }
  editar():void{
    for (let i = 0; i < this.compras.length; i++) {
      if(this.compras[i].codCliente===this.nuevo.codCliente &&
        this.compras[i].codArticulo===this.nuevo.codArticulo &&
        this.compras[i].fecha==this.nuevo.fecha){
          this.indice=i;
        }
    }
    this.compras[this.indice]=this.nuevo;
    this.nuevo={
      codCliente:0,
      codArticulo:0,
      fecha:"",
      unidades:0
    }
  }
}



