import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivoConsultaPageRoutingModule } from './objetivo-consulta-routing.module';

import { ObjetivoConsultaPage } from './objetivo-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivoConsultaPageRoutingModule
  ],
  declarations: [ObjetivoConsultaPage]
})
export class ObjetivoConsultaPageModule {}
