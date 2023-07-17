import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BotaoAddItensComponent } from './components/botao-add-itens/botao-add-itens.component';
import { TelaComponent } from './components/tela/tela.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './components/lista/lista.component';



@NgModule({
  declarations: [
  
    HomeComponent,
       HeaderComponent,
       BotaoAddItensComponent,
       TelaComponent,
       ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
