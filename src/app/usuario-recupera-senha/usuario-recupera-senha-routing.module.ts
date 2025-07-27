import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRecuperaSenhaPage } from './usuario-recupera-senha.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioRecuperaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRecuperaSenhaPageRoutingModule {}
