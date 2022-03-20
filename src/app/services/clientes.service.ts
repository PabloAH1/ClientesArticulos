import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes:Cliente[]=[];

  constructor() {this.clientes=this.getClienteDefault(); }

  clienteDefault:Cliente[]=[
  {
    codCliente:3,
    nombre:"asd",
    apellidos:"asdasd",
    empresa:"sadas",
    puesto:"asdasd",
    cp:444,
    provincia:"aasd",
    telefono:76,
    fechaNacimiento:"sdf"
    },
    {
      codCliente:4,
      nombre:"aaaaaa",
      apellidos:"sssssss",
      empresa:"ddddd",
      puesto:"wwww",
      cp:12312,
      provincia:"dfghf",
      telefono:34534,
      fechaNacimiento:"12312312"
      }
  ];

  getAllClientes():Cliente[]{
    return this.clientes;
  }
  getCliente(codCliente:number){
    return this.clientes.find(client=>client.codCliente===+codCliente);
  }
  addCliente(clienteNuevo:Cliente):void{
    let clienteNew:Cliente={
      codCliente: clienteNuevo.codCliente,
      nombre: clienteNuevo.nombre,
      apellidos: clienteNuevo.apellidos,
      empresa: clienteNuevo.empresa,
      puesto: clienteNuevo.puesto,
      cp: clienteNuevo.cp,
      provincia: clienteNuevo.provincia,
      telefono: clienteNuevo.telefono,
      fechaNacimiento: clienteNuevo.fechaNacimiento
    }
    this.clientes.push(clienteNew);
  }
  getClienteDefault():Cliente[]{
     return this.clienteDefault;
  }
  deleteCliente(idCliente:number):void{
    for (let i = 0; i < this.clientes.length; i++) {
      if(this.clientes[i].codCliente===idCliente)
        this.clientes.splice(i,1);
    }
   }
  }
