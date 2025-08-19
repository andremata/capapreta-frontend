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

      this.provider.post(dados, 'login.php').subscribe(
        (data: any) => {
          if (data['sucesso'] && data['token']) {
            localStorage.setItem('token', data['token']); // Armazena o token
            
            // Decodifica o payload do token para obter o nível do usuário
            const payload = JSON.parse(atob(data['token'].split('.')[1]));
            const userLevel = payload.data.nivel;

            if (userLevel == 'ADMINISTRADOR') {
              this.router.navigate(['home'], { replaceUrl: true });
            } else {
              this.router.navigate(['home-usuario'], { replaceUrl: true });
            }
          } else {
            this.mensagem(data['mensagem'], 'danger');
          }
        },
        error => {
          this.mensagem('Erro ao tentar fazer login. Tente novamente.', 'danger');
        }
      )
    })
  }

  cadastrar(){

  }
}
