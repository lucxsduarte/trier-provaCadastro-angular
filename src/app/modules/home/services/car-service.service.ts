import { DoCheck, EventEmitter, Injectable } from '@angular/core';
import { Carros } from '../models/Carros';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  public marca: string = "";
  public placa: string = "";
  public ano: number = 0;
  public tipo: string = "";
  public emitEvent = new EventEmitter();
  public emitMarca = new EventEmitter();
  public emitPlaca = new EventEmitter();
  public emitAno = new EventEmitter();
  public emitTipo = new EventEmitter();
  public indiceEditar: number = -1;

  public listaCarros: Array<Carros> = [
    {marca: "RENAULT", placa: "AAA0000", tipo: "luxo", ano: 2015},
  ]

  public getLista() {
    return this.listaCarros;
  }

  public addCarros(marca: string, placa: string, ano: number, tipo: string, ) {
    this.listaCarros.push({marca: marca, placa: placa, ano: ano, tipo: tipo});
    this.emitEvent.emit(this.listaCarros.length);
    return this.listaCarros;
  }

  public deleteAll(){
    const confirm = window.confirm('Você quer apagar todos os usuários cadastrados?');
    if (confirm) {
      this.listaCarros = [];
    }
  }

  public clickEditar(carro: any){
    this.indiceEditar = this.listaCarros.indexOf(carro);
    this.marca = carro.marca;
    this.placa = carro.placa;
    this.ano = carro.ano;
    this.tipo = carro.tipo;
    this.emitMarca.emit(this.marca);
    this.emitPlaca.emit(this.placa);
    this.emitAno.emit(this.ano);
    this.emitTipo.emit(this.tipo);
  }
  
  constructor() { }
}
