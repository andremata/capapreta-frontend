import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoMassPageRoutingModule } from './grafico-mass-routing.module';

import { GraficoMassPage } from './grafico-mass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoMassPageRoutingModule
  ],
  declarations: [GraficoMassPage]
})
export class GraficoMassPageModule {}
