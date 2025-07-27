import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacaoConsultaPageRoutingModule } from './anotacao-consulta-routing.module';

import { AnotacaoConsultaPage } from './anotacao-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacaoConsultaPageRoutingModule
  ],
  declarations: [AnotacaoConsultaPage]
})
export class AnotacaoConsultaPageModule {}
