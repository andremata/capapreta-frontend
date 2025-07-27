import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPrecadastroPageRoutingModule } from './usuario-precadastro-routing.module';

import { UsuarioPrecadastroPage } from './usuario-precadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPrecadastroPageRoutingModule
  ],
  declarations: [UsuarioPrecadastroPage]
})
export class UsuarioPrecadastroPageModule {}
