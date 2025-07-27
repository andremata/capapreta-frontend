import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivoCadastroPageRoutingModule } from './objetivo-cadastro-routing.module';

import { ObjetivoCadastroPage } from './objetivo-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivoCadastroPageRoutingModule
  ],
  declarations: [ObjetivoCadastroPage]
})
export class ObjetivoCadastroPageModule {}
