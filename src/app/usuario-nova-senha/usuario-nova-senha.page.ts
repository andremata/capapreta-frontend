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

  voltar() {
    this.router.navigate(['usuario-consulta']);
  }

  salvar(){
    let dados = {
      requisicao : "admin_alterar_senha",
      id         : this.id,
      senha      : this.senha,
      senha2     : this.senha2,
    };

    return new Promise(resolve => {
      this.provider.post(dados, 'usuarios.php').subscribe(
        data => {
          if(data['sucesso']){
            this.retorno(data['mensagem'], 'success');
            this.router.navigate(['usuario-consulta']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }
}
