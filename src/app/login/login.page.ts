import { core } from '@angular/compiler';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  senha: string = "";

  constructor(
    private router:Router,
    private provider: ApiService,
    public toastController: ToastController
  ) { }

  ngOnInit() {}

  async mensagem(mensagem: string, cor: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor
    });
    toast.present();
  }

  login() {
    return new Promise(resolve => {
      let dados = {
        email: this.email,
        senha: this.senha,
      }

      this.provider.requisicao(dados, 'login.php').subscribe(
        data => {
          if (data['sucesso']) {
              //this.mensagem(data['user']['nome'], 'success');

              environment.usuarioid = data['user']['id'];
              
              if (data['user']['nivel'] == 'ADMINISTRADOR') {
                this.router.navigate(['home'], { replaceUrl: true });
              } else {
                this.router.navigate(['home-usuario'], { replaceUrl: true });
              }
          } else{
            this.mensagem(data['mensagem'], 'danger');
          }
        }
      )
    })
  }

  cadastrar(){

  }
}
