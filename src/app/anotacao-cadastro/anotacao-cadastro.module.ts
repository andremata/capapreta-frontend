import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacaoCadastroPageRoutingModule } from './anotacao-cadastro-routing.module';

import { AnotacaoCadastroPage } from './anotacao-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacaoCadastroPageRoutingModule
  ],
  declarations: [AnotacaoCadastroPage]
})
export class AnotacaoCadastroPageModule {}
