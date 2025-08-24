import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-objetivo-cadastro',
  templateUrl: './objetivo-cadastro.page.html',
  styleUrls: ['./objetivo-cadastro.page.scss'],
})
export class ObjetivoCadastroPage implements OnInit {

  id: string = "";
  descricao: string = "";
  dataConclusao: string = "";
  prioridade: string = "";
  situacao: string = "";
  requisicao: string = "";
  originPage: string = "";

  constructor(private router: Router,
              private provider: ApiService,
              private actRoute: ActivatedRoute,
              private toastController: ToastController
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.descricao = data.descricao;
      this.dataConclusao = data.dataConclusao;
      this.situacao = data.situacao;
      this.prioridade = data.prioridade;
    });

    this.actRoute.queryParams.subscribe(params => {
      this.originPage = params['from'] || '';
    });
  }

  limparCampos() {
    this.id = "";
    this.descricao = "";
    this.dataConclusao = "";
    this.situacao = "";
    this.prioridade = "";
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  findObjetivos() {
    if (this.originPage === 'grafico') {
      this.router.navigate(['grafico-mass']);
    } else {
      this.router.navigate(['objetivo-consulta']);
    }
  }

  formatarDataBanco(data: string | Date) {
    const dataFormatada = typeof data === 'string' ? new Date(data + 'Z') : data;

    if(!(dataFormatada instanceof Date)) {
      return '';
    }

    const dia = ('0' + (dataFormatada.getUTCDate())).slice(-2);
    const mes = ('0' + (dataFormatada.getUTCMonth() + 1)).slice(-2); 
    const ano = dataFormatada.getUTCFullYear();

    return `${ano}-${mes}-${dia}`;
  }

  formatarDataView(data: string | Date) {
    const dataFormatada = typeof data === 'string' ? new Date(data + 'Z') : data;

    if(!(dataFormatada instanceof Date)) {
      return 'teste';
    }

    const dia = ('0' + (dataFormatada.getUTCDate())).slice(-2);
    const mes = ('0' + (dataFormatada.getUTCMonth() + 1)).slice(-2); 
    const ano = dataFormatada.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  salvar() {
    let dados = {
      requisicao: "incluir",
      id: this.id,
      descricao: this.descricao,
      dataConclusao: this.formatarDataBanco(this.dataConclusao),
      situacao: this.situacao,
      prioridade: this.prioridade,
      
    }

    if(dados.dataConclusao == '') {
      this.retorno('Preecnha a data', 'danger');
      return '';
    }

    return new Promise(resolve => {
      this.provider.post(dados, 'objetivo.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            if (this.originPage === 'grafico') {
              this.router.navigate(['grafico-mass']);
            } else {
              this.router.navigate(['objetivo-consulta']);
            }

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
      dataConclusao: this.dataConclusao,
      situacao: this.situacao,
      prioridade: this.prioridade,
      
    }

    if(dados.dataConclusao == '') {
      this.retorno('Preecnha a data', 'danger');
      return '';
    }

    return new Promise(resolve => {
      this.provider.post(dados, 'objetivo.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.retorno(data['mensagem'], 'success');
            this.limparCampos();
            if (this.originPage === 'grafico') {
              this.router.navigate(['grafico-mass']);
            } else {
              this.router.navigate(['objetivo-consulta']);
            }

          } else {
            this.retorno(data['mensagem'], 'danger');
          }
        }
      );
    });
  }
}
