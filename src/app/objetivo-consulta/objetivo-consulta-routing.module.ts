import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivoConsultaPage } from './objetivo-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivoConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivoConsultaPageRoutingModule {}
