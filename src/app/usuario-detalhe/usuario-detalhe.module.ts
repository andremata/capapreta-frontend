import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioDetalhePageRoutingModule } from './usuario-detalhe-routing.module';

import { UsuarioDetalhePage } from './usuario-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioDetalhePageRoutingModule
  ],
  declarations: [UsuarioDetalhePage]
})
export class UsuarioDetalhePageModule {}
