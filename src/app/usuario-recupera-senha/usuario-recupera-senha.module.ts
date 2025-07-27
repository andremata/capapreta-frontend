import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRecuperaSenhaPageRoutingModule } from './usuario-recupera-senha-routing.module';

import { UsuarioRecuperaSenhaPage } from './usuario-recupera-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRecuperaSenhaPageRoutingModule
  ],
  declarations: [UsuarioRecuperaSenhaPage]
})
export class UsuarioRecuperaSenhaPageModule {}
