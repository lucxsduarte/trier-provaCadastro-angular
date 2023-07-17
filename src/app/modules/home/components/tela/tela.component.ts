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
    this.service.addCarros(marca, placa, parseInt(ano), tipo);
    this.marca = "";
    this.placa = "";
    this.tipo = "";
    this.ano = 0;
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
    });

    this.service.emitMarca.subscribe((marca: string) => {
      // Faça o que precisa com o novo alerta
      this.marca = marca;
    });

    this.service.emitPlaca.subscribe((placa: string) => {
      // Faça o que precisa com o novo alerta
      this.placa = placa;
    });

    this.service.emitAno.subscribe((ano: number) => {
      // Faça o que precisa com o novo alerta
      this.ano = ano;
    });

    this.service.emitTipo.subscribe((tipo: string) => {
      // Faça o que precisa com o novo alerta
      this.tipo = tipo;
    });
  
  }



}
