import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Chart, registerables } from 'chart.js';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

Chart.register(...registerables)

@Component({
  selector: 'app-grafico-mass',
  templateUrl: './grafico-mass.page.html',
  styleUrls: ['./grafico-mass.page.scss'],
})
export class GraficoMassPage {
  objetivos: any = [];

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  pieChart: any;

  constructor(private router: Router,
              private provider: ApiService,
              private toastController: ToastController
  ) { }

  ionViewWillEnter(){
    this.consultar();
  }

  getChart(context, chartType, data, objectives, options?) {
    return new Chart (context, {
      data,
      options: {
        ...options,
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedElementIndex = elements[0].index;
            const objective = objectives[clickedElementIndex];
            this.navigateToObjective(objective);
          }
        }
      },
      type: chartType
    })
  }

  getPieChart(){
    const data = {
      labels: [],
      datasets: [{
        data: [300, 75, 224, 28, 102, 380, 350],
        backgroundColor: ['#7270B5', '#C86FA7', '#ACB9C9', '#10537D', '#F9DB6A', '#69C8C5', '#E85154']
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data, []);
  }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['home-usuario']);
  }

  async retorno(mensagem : string, tipoRetorno : string){
    const toast = await this.toastController.create({
      message : mensagem,
      duration : 3000,
      color : tipoRetorno,
    });

    toast.present();
  }

  consultar() {
    if (this.pieChart) {
      this.pieChart.destroy();
    }

    let dados = {
      requisicao: "mass",
    };

    this.provider.post(dados, 'objetivo.php').subscribe(
      data => {
        if(data['sucesso']) {
          this.objetivos = data['objetivos'];

          const result = {
            labels: [] as string[],
            datasets: [{
              data: [] as number[],
              backgroundColor: ['#7270B5', '#C86FA7', '#ACB9C9', '#10537D', '#F9DB6A', '#69C8C5', '#E85154']
            }]
          };

          for(let item of this.objetivos) {
            result.labels.push(item['descricao']);
            result.datasets[0].data.push(item['prioridade']);
          }
          
          this.pieChart = this.getChart(this.pieCanvas.nativeElement, 'pie', result, this.objetivos);

        } else {
          this.retorno(data['mensagem'], 'danger');
        }
      }
    );
  }

  navigateToObjective(objective) {
    this.router.navigate(['objetivo-cadastro/' + objective.id + '/' 
      + objective.descricao + '/' + objective.dataConclusao + '/' 
      + objective.situacao + '/' + objective.prioridade], { queryParams: { from: 'grafico' } });
  }
}
