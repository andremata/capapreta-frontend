import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaConsultaPageRoutingModule } from './tarefa-consulta-routing.module';

import { TarefaConsultaPage } from './tarefa-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaConsultaPageRoutingModule
  ],
  declarations: [TarefaConsultaPage]
})
export class TarefaConsultaPageModule {}
