import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-objetivo-consulta',
  templateUrl: './objetivo-consulta.page.html',
  styleUrls: ['./objetivo-consulta.page.scss'],
})
export class ObjetivoConsultaPage implements OnInit {

  objetivos: any = [];
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
    this.objetivos = [];
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

  home() {
    this.router.navigate(['home-usuario']);
  }

  addObjetivo(){
    this.router.navigate(['objetivo-cadastro']);
  }

  consultar() {
    return new Promise(resolve => {
      this.objetivos = [];

      let dados = {
        requisicao: 'consultar',
        descricao: this.descricao,
        
        limit: this.limit,
        start: this.start,
      };
    
      this.provider.post(dados, 'objetivo.php').subscribe(
        data => {
          if(!data['sucesso']) {
            this.ionViewWillEnter();
  
          } else {
            this.objetivos = [];
  
            for(let item of data['objetivos']) {
              this.objetivos.push(item);
            }
          }
  
          resolve(true);
        }
      );
    });
  }

  editar(id, descricao, dataConclusao, situacao, prioridade) {
    this.router.navigate(['objetivo-cadastro/' + id + '/' 
      + descricao + '/' + dataConclusao + '/' + situacao + '/' + prioridade]);
  }

  excluir(id) {
    let dados = {
      requisicao: "excluir",
      id: id,
      
    }

    return new Promise(resolve => {
      this.provider.post(dados, 'objetivo.php').subscribe(
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
