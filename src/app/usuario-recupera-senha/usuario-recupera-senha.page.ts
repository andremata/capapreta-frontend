import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-recupera-senha',
  templateUrl: './usuario-recupera-senha.page.html',
  styleUrls: ['./usuario-recupera-senha.page.scss'],
})
export class UsuarioRecuperaSenhaPage implements OnInit {

  email    : string = "";
   
  constructor(private router : Router,
              private provider : ApiService,
              private atRoute : ActivatedRoute,
              private toastController : ToastController) { }

  ngOnInit() {
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

  recuperar(){
    let dados = {
      requisicao : "recuperar",
      email      : this.email,
    };

    return new Promise(resolve => {
      this.provider.post(dados, 'usuarios.php').subscribe(
        data => {
          if(data['sucesso']){
            this.alterarSenha(data['user'], dados.email);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }

  alterarSenha(id, email){
    this.router.navigate(['usuario-nova-senha/' + id + '/' + email]);
  }
}
