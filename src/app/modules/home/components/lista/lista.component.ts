import { Component, EventEmitter, OnInit } from '@angular/core';
import { Carros } from '../../models/Carros';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{

  public listaCarros: Array<Carros> = [];
  
  public fonte: string = "";
  public fonteNomal: boolean = true;
  public fonteFantasy: boolean = true;
  public fonteCourier: boolean = true;
  public fonteVerdana: boolean = true;

  constructor(private service: CarServiceService){}

  ngOnInit(): void {
    this.listaCarros = this.service.getLista();
  }

  clickEditar(carro: any): void{
    this.service.clickEditar(carro);
  }

  public deleteItem(event: number){
    return this.listaCarros.splice(event, 1);
  }

}
