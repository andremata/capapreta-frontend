import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tarefa-consulta',
  templateUrl: './tarefa-consulta.page.html',
  styleUrls: ['./tarefa-consulta.page.scss'],
})
export class TarefaConsultaPage implements OnInit {

  tarefas: any = [];
  limit: number = 10;
  start: number  = 0;
  descricao: string = "";

  constructor(private router: Router,
              private provider: ApiService,
              private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.tarefas = [];
    this.start = 0;
    this.consultar();
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  addTarefa(){
    this.router.navigate(['tarefa-cadastro']);
  }

  consultar(){
    return new Promise(resolve => {
      this.tarefas = [];

      let dados = {
        requisicao: 'consultar',
        descricao: this.descricao,
        
        limit : this.limit,
        start : this.start,
      };

      this.provider.post(dados, 'tarefa.php').subscribe(
        data => {
          if(!data['sucesso']) {
            this.ionViewWillEnter();

          } else {
            this.tarefas = [];

            for(let item of data['tarefas']) {
              this.tarefas.push(item);
            }
          }

          resolve(true);
        }
      );
    });
  }

  excluir(id){
    let dados = {
      requisicao: "excluir",
      id: id,
      
    };

    return new Promise(resolve => {
      this.provider.post(dados, 'tarefa.php').subscribe(
        data => {
          if(data['sucesso']){
            this.retorno(data['mensagem'], 'success');
            this.consultar();

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }

  editar(id, descricao, situacao){
    this.router.navigate(['tarefa-cadastro/' + id + '/' 
      + descricao + '/' + situacao]);
  }

  home() {
    this.router.navigate(['home-usuario']);
  }

  //atualizar lista
  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  //barra de rolagem
  loadData(event) {
    this.start += this.limit;
  
    setTimeout(() => {
      this.consultar().then(() => { 
        event.target.complete();
       });
     
    }, 500);
  }
}
