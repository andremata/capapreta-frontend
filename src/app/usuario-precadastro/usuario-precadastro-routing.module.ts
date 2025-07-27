import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPrecadastroPage } from './usuario-precadastro.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPrecadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPrecadastroPageRoutingModule {}
