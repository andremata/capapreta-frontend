import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioDetalhePage } from './usuario-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioDetalhePageRoutingModule {}
