import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.page.html',
  styleUrls: ['./usuario-consulta.page.scss'],
})
export class UsuarioConsultaPage implements OnInit {

  usuarios : any = [];
  limit    : number = 10;
  start    : number  = 0;
  nome     : string = "";

  constructor(private router : Router,
              private provider : ApiService,
              private atRoute : ActivatedRoute,
              private toastController : ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarios = [];
    this.start = 0;
    this.consultar();
  }

  addUsuario(){
    this.router.navigate(['usuario-cadastro']);
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  consultar(){
    return new Promise(resolve => {
      this.usuarios = [];

      let dados = {
        requisicao : 'consultar',
        nome : this.nome,
        limit : this.limit,
        start : this.start
      };

      this.provider.requisicao(dados, 'usuarios.php').subscribe(
        data => {
          if(!data['sucesso']){
            this.ionViewWillEnter();

          } else {
            this.usuarios = [];

            for(let item of data['users']){
              this.usuarios.push(item);
            }
          }

          resolve(true);
      });

    });
  }

  editar(id, nome, email, usuario, senha, nivel, situacao){
    this.router.navigate(['usuario-cadastro/' + id + '/' 
      + nome + '/' + email + '/' + usuario + '/' + senha + '/' 
      + nivel + '/' + situacao]);
  }

  excluir(id){
    let dados = {
      requisicao : "excluir",
      id: id,
    };

    return new Promise(resolve => {
      this.provider.requisicao(dados, 'usuarios.php').subscribe(
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

  mostrar(id, nome, email, usuario, senha, nivel, situacao){
    this.router.navigate(['usuario-detalhe/' + id + '/' 
      + nome + '/' + email + '/' + usuario + '/' + senha + '/' 
      + nivel + '/' + situacao]);
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

  voltar(){
    this.router.navigate(['home']);
  }
}
