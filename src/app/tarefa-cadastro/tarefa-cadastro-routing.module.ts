import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaCadastroPage } from './tarefa-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaCadastroPageRoutingModule {}
