import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.page.html',
  styleUrls: ['./usuario-detalhe.page.scss'],
})
export class UsuarioDetalhePage implements OnInit {

  id      : string = "";
  nome    : string = "";
  email   : string = "";
  usuario : string = "";
  senha   : string = "";
  nivel   : string = "";
  situacao: string = "";

  constructor(private router : Router,
              private atRoute : ActivatedRoute) { }

  ngOnInit() {
    this.atRoute.params.subscribe((data : any) => {
      this.id       = data.id;
      this.nome     = data.nome;
      this.email    = data.email;
      this.usuario  = data.usuario;
      this.senha    = data.senha;
      this.nivel    = data.nivel;
      this.situacao = data.situacao;
    });
  }

  findUsuarios(){
    this.router.navigate(['usuario-consulta']);
  }
}
