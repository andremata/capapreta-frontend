import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaCadastroPageRoutingModule } from './tarefa-cadastro-routing.module';

import { TarefaCadastroPage } from './tarefa-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaCadastroPageRoutingModule
  ],
  declarations: [TarefaCadastroPage]
})
export class TarefaCadastroPageModule {}
