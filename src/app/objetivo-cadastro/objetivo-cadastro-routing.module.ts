import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivoCadastroPage } from './objetivo-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivoCadastroPageRoutingModule {}
