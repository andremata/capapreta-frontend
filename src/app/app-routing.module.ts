import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
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
    loadChildren: () => import('./usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario-cadastro/:id/:nome/:email/:usuario/:nivel/:situacao',
    loadChildren: () => import('./usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario-cadastro/:id/:nome/:email/:usuario/:senha/:nivel/:situacao',
    loadChildren: () => import('./usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario-consulta',
    loadChildren: () => import('./usuario-consulta/usuario-consulta.module').then( m => m.UsuarioConsultaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario-precadastro',
    loadChildren: () => import('./usuario-precadastro/usuario-precadastro.module').then( m => m.UsuarioPrecadastroPageModule)
  },
  {
    path: 'usuario-detalhe',
    loadChildren: () => import('./usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario-detalhe/:id/:nome/:email/:usuario/:senha/:nivel/:situacao',
    loadChildren: () => import('./usuario-detalhe/usuario-detalhe.module').then( m => m.UsuarioDetalhePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home-usuario',
    loadChildren: () => import('./home-usuario/home-usuario.module').then( m => m.HomeUsuarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tarefa-consulta',
    loadChildren: () => import('./tarefa-consulta/tarefa-consulta.module').then( m => m.TarefaConsultaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tarefa-cadastro',
    loadChildren: () => import('./tarefa-cadastro/tarefa-cadastro.module').then( m => m.TarefaCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tarefa-cadastro/:id/:descricao/:situacao',
    loadChildren: () => import('./tarefa-cadastro/tarefa-cadastro.module').then( m => m.TarefaCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'objetivo-cadastro',
    loadChildren: () => import('./objetivo-cadastro/objetivo-cadastro.module').then( m => m.ObjetivoCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'objetivo-cadastro/:id/:descricao/:dataConclusao/:situacao/:prioridade',
    loadChildren: () => import('./objetivo-cadastro/objetivo-cadastro.module').then( m => m.ObjetivoCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'objetivo-consulta',
    loadChildren: () => import('./objetivo-consulta/objetivo-consulta.module').then( m => m.ObjetivoConsultaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anotacao-consulta',
    loadChildren: () => import('./anotacao-consulta/anotacao-consulta.module').then( m => m.AnotacaoConsultaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anotacao-cadastro',
    loadChildren: () => import('./anotacao-cadastro/anotacao-cadastro.module').then( m => m.AnotacaoCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anotacao-cadastro/:id/:descricao',
    loadChildren: () => import('./anotacao-cadastro/anotacao-cadastro.module').then( m => m.AnotacaoCadastroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'grafico-mass',
    loadChildren: () => import('./grafico-mass/grafico-mass.module').then( m => m.GraficoMassPageModule),
    canActivate: [AuthGuard]
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
    path: 'usuario-nova-senha/:id',
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
