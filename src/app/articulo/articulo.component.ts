import { Component, OnInit } from '@angular/core';
import { Articulo } from '../interfaces/articulo.interfaces';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Articulo[]=[];
  nombreArticuloBuscado!:string;
  articuloMostrar!:Articulo;
  buscarCod!:number;
  mostrarTodos:boolean=false;
  indice:number=0;

  nuevo:Articulo={
    codArticulo:0,
    nombre:"",
    descripcion:"",
    precioUnidad:0,
    unidadesStock:0,
    stockSeguridad:0,
    imagen:"",
  }

  constructor(private _articuloService: ArticulosService) {console.log(this.articulos.length); }

  ngOnInit(): void {
    this.articulos=this._articuloService.getAllArticulos();
  }
  agregar():void{
    if (this.nuevo.codArticulo!==0){
      this._articuloService.addArticulo(this.nuevo);
      console.log(this.nuevo);
    }
  }
  mostrarTodosArticulos():void{
    this.mostrarTodos=!this.mostrarTodos;
  }
  mostrar():void{
    let articuloBuscado=this._articuloService.getArticulo(this.buscarCod);
    this.nombreArticuloBuscado=articuloBuscado!.nombre;
  }
  eliminar():void{
    this._articuloService.deleteArticulo(this.buscarCod);
  }
  limpiar():void{
    this.nombreArticuloBuscado="";
  }
  //pendiente arreglo
  editar():void{
    for (let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codArticulo===this.nuevo.codArticulo)
       this.indice=i;
    }
    this.articulos[this.indice]=this.nuevo;

    this.nuevo={
      codArticulo:0,
      nombre:"",
      descripcion:"",
      precioUnidad:0,
      unidadesStock:0,
      stockSeguridad:0,
      imagen:""
    }
  }

}
