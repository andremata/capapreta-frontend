import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioNovaSenhaPageRoutingModule } from './usuario-nova-senha-routing.module';

import { UsuarioNovaSenhaPage } from './usuario-nova-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioNovaSenhaPageRoutingModule
  ],
  declarations: [UsuarioNovaSenhaPage]
})
export class UsuarioNovaSenhaPageModule {}
