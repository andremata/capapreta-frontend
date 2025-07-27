import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'usuario-cadastro',
    loadChildren: () => import('./usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule)
  },
  {
    path: 'usuario-cadastro/:id/:nome/:email/:usuario/:senha/:nivel/:situacao',
    loadChildren: () => import('./usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule)
  },
  {
    path: 'usuario-consulta',
    loadChildren: () => import('./usuario-consulta/usuario-consulta.module').then( m => m.UsuarioConsultaPageModule)
  },
  {
    path: 'usuario-precadastro',
    loadChildren: () => import('./usuario-precadastro/usuario-precadastro.module').then( m => m.UsuarioPrecadastroPageModule)
  },
  {
    path: 'usuario-detalhe',
    loadChildren: () => import('./usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule)
  },
  {
    path: 'usuario-detalhe/:id/:nome/:email/:usuario/:senha/:nivel/:situacao',
    loadChildren: () => import('./usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule)
  },
  {
    path: 'home-usuario',
    loadChildren: () => import('./home-usuario/home-usuario.module').then( m => m.HomeUsuarioPageModule)
  },
  {
    path: 'tarefa-consulta',
    loadChildren: () => import('./tarefa-consulta/tarefa-consulta.module').then( m => m.TarefaConsultaPageModule)
  },
  {
    path: 'tarefa-cadastro',
    loadChildren: () => import('./tarefa-cadastro/tarefa-cadastro.module').then( m => m.TarefaCadastroPageModule)
  },
  {
    path: 'tarefa-cadastro/:id/:descricao/:situacao',
    loadChildren: () => import('./tarefa-cadastro/tarefa-cadastro.module').then( m => m.TarefaCadastroPageModule)
  },
  {
    path: 'objetivo-cadastro',
    loadChildren: () => import('./objetivo-cadastro/objetivo-cadastro.module').then( m => m.ObjetivoCadastroPageModule)
  },
  {
    path: 'objetivo-cadastro/:id/:descricao/:dataConclusao/:situacao/:prioridade',
    loadChildren: () => import('./objetivo-cadastro/objetivo-cadastro.module').then( m => m.ObjetivoCadastroPageModule)
  },
  {
    path: 'objetivo-consulta',
    loadChildren: () => import('./objetivo-consulta/objetivo-consulta.module').then( m => m.ObjetivoConsultaPageModule)
  },
  {
    path: 'anotacao-consulta',
    loadChildren: () => import('./anotacao-consulta/anotacao-consulta.module').then( m => m.AnotacaoConsultaPageModule)
  },
  {
    path: 'anotacao-cadastro',
    loadChildren: () => import('./anotacao-cadastro/anotacao-cadastro.module').then( m => m.AnotacaoCadastroPageModule)
  },
  {
    path: 'anotacao-cadastro/:id/:descricao',
    loadChildren: () => import('./anotacao-cadastro/anotacao-cadastro.module').then( m => m.AnotacaoCadastroPageModule)
  },
  {
    path: 'grafico-mass',
    loadChildren: () => import('./grafico-mass/grafico-mass.module').then( m => m.GraficoMassPageModule)
  },
  {
    path: 'usuario-recupera-senha',
    loadChildren: () => import('./usuario-recupera-senha/usuario-recupera-senha.module').then( m => m.UsuarioRecuperaSenhaPageModule)
  },
  {
    path: 'usuario-nova-senha',
    loadChildren: () => import('./usuario-nova-senha/usuario-nova-senha.module').then( m => m.UsuarioNovaSenhaPageModule)
  },
  {
    path: 'usuario-nova-senha/:id/:email',
    loadChildren: () => import('./usuario-nova-senha/usuario-nova-senha.module').then( m => m.UsuarioNovaSenhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
