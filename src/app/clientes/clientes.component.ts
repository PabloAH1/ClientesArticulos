import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../interfaces/cliente.interfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientes:Cliente[]=[];

buscarCod!:number;
mostrarTodos:boolean=false;
clienteMostrar!:Cliente;
nombreClienteBuscado!:string;
indice:number=0;

nuevo:Cliente={
  codCliente:0,
  nombre:"",
  apellidos:"",
  empresa:"",
  puesto:"",
  cp:0,
  provincia:"",
  telefono:0,
  fechaNacimiento:""
}
  constructor(private _clienteService: ClientesService) {console.log(this.clientes.length); }

  ngOnInit(): void {
    this.clientes=this._clienteService.getAllClientes();
  }
  agregar():void{
    if (this.nuevo.codCliente!==0){
      this._clienteService.addCliente(this.nuevo);
      console.log(this.nuevo);

    }
  }
  mostrarTodosClientes():void{
    this.mostrarTodos=!this.mostrarTodos;
  }
  mostrar():void{
    let clienteBuscado=this._clienteService.getCliente(this.buscarCod);
    this.nombreClienteBuscado=clienteBuscado!.nombre;
  }
  eliminar():void{
    this._clienteService.deleteCliente(this.buscarCod);
  }
  limpiar():void{
    this.nombreClienteBuscado="";
  }
  editar():void{
    for (let i = 0; i < this.clientes.length; i++) {
      if(this.clientes[i].codCliente===this.nuevo.codCliente)
       this.indice=i;
    }
    this.clientes[this.indice]=this.nuevo;

    this.nuevo={
      codCliente:0,
      nombre:"",
      apellidos:"",
      empresa:"",
      puesto:"",
      cp:0,
      provincia:"",
      telefono:0,
      fechaNacimiento:""
    }
  }
}
