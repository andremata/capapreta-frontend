import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-usuario-precadastro',
  templateUrl: './usuario-precadastro.page.html',
  styleUrls: ['./usuario-precadastro.page.scss'],
})
export class UsuarioPrecadastroPage implements OnInit {

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

  ngOnInit() {}

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
      requisicao : "incluir",
      id         : this.id,
      nome       : this.nome,
      email      : this.email,
      senha      : this.senha,
      nivel      : this.nivel,
      situacao   : this.situacao,
    };

    return new Promise(resolve => {
      this.provider.post(dados, 'usuario-precadastro.php').subscribe(
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
