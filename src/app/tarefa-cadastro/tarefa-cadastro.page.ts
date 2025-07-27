import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tarefa-cadastro',
  templateUrl: './tarefa-cadastro.page.html',
  styleUrls: ['./tarefa-cadastro.page.scss'],
})
export class TarefaCadastroPage implements OnInit {

  id: string = "";
  descricao: string = "";
  situacao: string = "";

  constructor(private router: Router,
              private provider: ApiService,
              private atRoute: ActivatedRoute,
              private toastController: ToastController
  ) { }

  ngOnInit() {
    this.atRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.descricao = data.descricao;
      this.situacao = data.situacao;
    });
  }

  limparCampos() {
    this.id = "";
    this.descricao = "";
    this.situacao = "";
  }

  findTarefas(){
    this.router.navigate(['tarefa-consulta']);
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
      situacao: this.situacao,
      usuarioid: environment.usuarioid,
    };

    return new Promise(resolve => {
      this.provider.requisicao(dados, 'tarefa.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            this.router.navigate(['tarefa-consulta']);

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
      situacao: this.situacao,
      usuarioid: environment.usuarioid,
    };

    return new Promise(resolve => {
      this.provider.requisicao(dados, 'tarefa.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            this.router.navigate(['tarefa-consulta']);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }
}
