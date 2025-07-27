import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-anotacao-consulta',
  templateUrl: './anotacao-consulta.page.html',
  styleUrls: ['./anotacao-consulta.page.scss'],
})
export class AnotacaoConsultaPage implements OnInit {

  anotacoes: any = [];
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
    this.anotacoes = [];
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

  addAnotacao(){
    this.router.navigate(['anotacao-cadastro']);
  }

  consultar(){
    return new Promise(resolve => {
      this.anotacoes = [];

      let dados = {
        requisicao: 'consultar',
        descricao: this.descricao,
        usuarioid: environment.usuarioid,
        limit : this.limit,
        start : this.start,
      };

      this.provider.requisicao(dados, 'anotacoes.php').subscribe(
        data => {
          if(!data['sucesso']) {
            this.ionViewWillEnter();

          } else {
            this.anotacoes = [];

            for(let item of data['anotacoes']) {
              this.anotacoes.push(item);
            }
          }

          resolve(true);
        }
      );
    });
  }

  editar(id, descricao){
    this.router.navigate(['anotacao-cadastro/' + id + '/' 
      + descricao]);
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
