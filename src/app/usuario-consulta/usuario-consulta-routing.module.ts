import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioConsultaPage } from './usuario-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioConsultaPageRoutingModule {}
