import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotacaoConsultaPage } from './anotacao-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: AnotacaoConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotacaoConsultaPageRoutingModule {}
