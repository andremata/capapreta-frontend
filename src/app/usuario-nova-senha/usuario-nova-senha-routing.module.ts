import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioNovaSenhaPage } from './usuario-nova-senha.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioNovaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioNovaSenhaPageRoutingModule {}
