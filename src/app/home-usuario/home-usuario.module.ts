import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUsuarioPageRoutingModule } from './home-usuario-routing.module';

import { HomeUsuarioPage } from './home-usuario.page';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUsuarioPageRoutingModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    NgxChartsModule
  ],
  declarations: [HomeUsuarioPage],
  bootstrap: [HomeUsuarioPage]
})
export class HomeUsuarioPageModule {}
