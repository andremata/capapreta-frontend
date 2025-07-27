import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioConsultaPageRoutingModule } from './usuario-consulta-routing.module';

import { UsuarioConsultaPage } from './usuario-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioConsultaPageRoutingModule
  ],
  declarations: [UsuarioConsultaPage]
})
export class UsuarioConsultaPageModule {}
