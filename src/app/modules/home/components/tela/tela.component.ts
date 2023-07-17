import { Component, DoCheck, EventEmitter, Input, OnInit } from '@angular/core';
import { Carros } from '../../models/Carros';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit{

  public marca: string = "";
  public placa: string = "";
  public ano: number = 0;
  public tipo: string = "";

  constructor(private service: CarServiceService){}

  public cadastraCarro(marca: string, placa: string, ano: string, tipo: string){
    if (this.service.indiceEditar !== -1) {
      const indice = this.service.indiceEditar;
      this.service.listaCarros[indice].marca = marca;
      this.service.listaCarros[indice].placa = placa;
      this.service.listaCarros[indice].ano = parseInt(ano);
      this.service.listaCarros[indice].tipo = tipo;
      this.service.indiceEditar = -1; // Resetar o índice de edição
    } else {
      this.service.addCarros(marca, placa, parseInt(ano), tipo);
    }
    this.marca = "";
    this.placa = "";
    this.tipo = "";
    this.ano = 0;
  }

  ngOnInit(): void {
    this.service.emitMarca.subscribe((marca: string) => {
      this.marca = marca;
    });

    this.service.emitPlaca.subscribe((placa: string) => {
      this.placa = placa;
    });

    this.service.emitAno.subscribe((ano: number) => {
      this.ano = ano;
    });

    this.service.emitTipo.subscribe((tipo: string) => {
      this.tipo = tipo;
    });
  
  }



}
