import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-nova-senha',
  templateUrl: './usuario-nova-senha.page.html',
  styleUrls: ['./usuario-nova-senha.page.scss'],
})
export class UsuarioNovaSenhaPage implements OnInit {

  id       : string = "";
  email    : string = "";
  senha    : string = "";
  senha2   : string = "";

  constructor(private router : Router,
              private provider : ApiService,
              private atRoute : ActivatedRoute,
              private toastController : ToastController) { }

  ngOnInit() {
    this.atRoute.params.subscribe((data : any) => {
      this.id       = data.id;
      this.email    = data.email;
    });
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  login(){
    this.router.navigate(['login']);
  }

  salvar(){
    let dados = {
      requisicao : "alterar_senha",
      id         : this.id,
      senha      : this.senha,
      senha2     : this.senha2,
      email      : this.email,
    };

    return new Promise(resolve => {
      this.provider.requisicao(dados, 'usuarios.php').subscribe(
        data => {
          if(data['sucesso']){
            this.retorno(data['mensagem'], 'success');
            this.router.navigate(['login']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }
}
