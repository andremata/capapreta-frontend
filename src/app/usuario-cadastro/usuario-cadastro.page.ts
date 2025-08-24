import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  id       : string = "";
  nome     : string = "";
  email    : string = "";
  senha    : string = "";
  nivel    : string = "";
  situacao : string = "";

  constructor(private router : Router,
              private provider : ApiService,
              private atRoute : ActivatedRoute,
              private toastController : ToastController) { }

  ngOnInit() {
    this.atRoute.params.subscribe((data : any) => {
      this.id       = data.id;
      this.nome     = data.nome;
      this.email    = data.email;
      this.nivel    = data.nivel;
      this.situacao = data.situacao;
    });
  }

  limparCampos(){
    this.id = "";
    this.nome = "";
    this.email = "";
    this.senha = "";
    this.nivel = "";
    this.situacao = "";
  }

  findUsuarios(){
    this.router.navigate(['usuario-consulta']);
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  salvar(){
    let dados = {
      requisicao : "incluir",
      id         : this.id,
      nome       : this.nome,
      email      : this.email,
      senha      : this.senha,
      nivel      : this.nivel,
      situacao   : this.situacao,
    };

    return new Promise(resolve => {
      this.provider.post(dados, 'usuarios.php').subscribe(
        data => {
          if(data['sucesso']){
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            this.router.navigate(['usuario-consulta']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }

  alterar(){
    let dados = {
      requisicao : "alterar",
      id         : this.id,
      nome       : this.nome,
      email      : this.email,
      senha      : this.senha,
      nivel      : this.nivel,
      situacao   : this.situacao,
    };

    return new Promise(resolve => {
      this.provider.post(dados, 'usuarios.php').subscribe(
        data => {
          if(data['sucesso']){
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            this.router.navigate(['usuario-consulta']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }
}
