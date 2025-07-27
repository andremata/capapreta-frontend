import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-anotacao-cadastro',
  templateUrl: './anotacao-cadastro.page.html',
  styleUrls: ['./anotacao-cadastro.page.scss'],
})
export class AnotacaoCadastroPage implements OnInit {

  id: string = "";
  descricao: string = "";

  constructor(private router: Router,
              private provider: ApiService,
              private atRoute: ActivatedRoute,
              private toastController: ToastController) 
  { }

  ngOnInit() {
    this.atRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.descricao = data.descricao;
    });
  }

  limparCampos() {
    this.id = "";
    this.descricao = "";
  }

  findAnotacoes(){
    this.router.navigate(['anotacao-consulta']);
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  salvar() {
    let dados = {
      requisicao: "incluir",
      id: this.id,
      descricao: this.descricao,
      usuarioid: environment.usuarioid,
    };

    return new Promise(resolve => {
      this.provider.requisicao(dados, 'anotacoes.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            this.router.navigate(['anotacao-consulta']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }

  alterar() {
    let dados = {
      requisicao: "alterar",
      id: this.id,
      descricao: this.descricao,
      usuarioid: environment.usuarioid,
    };

    return new Promise(resolve => {
      this.provider.requisicao(dados, 'anotacoes.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            this.router.navigate(['anotacao-consulta']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }
}
