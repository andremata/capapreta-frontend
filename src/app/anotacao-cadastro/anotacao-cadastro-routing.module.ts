import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotacaoCadastroPage } from './anotacao-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AnotacaoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotacaoCadastroPageRoutingModule {}
