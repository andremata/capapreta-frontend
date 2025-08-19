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
export class GraficoMassPage implements OnInit, AfterViewInit {
  objetivos: any = [];

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  //barChart: any;
  //lineChart: any;
  pieChart: any;
  //doughnutChart: any;

  constructor(private router: Router,
              private provider: ApiService,
              private toastController: ToastController
  ) { }

  ngAfterViewInit(){
    setTimeout(() => {
      //this.barChart = this.getBarChart();
      //this.lineChart = this.getLineChart();
    }, 250)
    setTimeout(() => {
      this.pieChart = this.consultar();
      //this.pieChart = this.getPieChart();
      //this.doughnutChart = this.getDoughnutChart();
    }, 500)
  }

  getChart(context, chartType, data, options?) {
    return new Chart (context, {
      data,
      options,
      type: chartType
    })
  }

  /*getBarChart(){
    const data = {
      labels: ['Tar-1', 'Tar-2', 'Tar-3', 'Tar-4', 'Tar-5', 'Tar-6','Tar-7'],
      datasets: [{
        label: 'número de votos',
        data: [12, 23, 15, 90, 75, 58, 32],
        backgroundColor: ['#7270B5', '#C86FA7', '#ACB9C9', '#10537D', '#F9DB6A', '#69C8C5', '#E85154'],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }*/

  /*getLineChart(){
    const data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
      datasets: [{
        label: 'Meu Dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(0, 178, 255)',
        borderColor: 'rgb(231, 205, 35)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[20, 15, 98, 4],
        scanGaps: false,
      }, {
        label: 'Meu segundo Dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(117, 0, 49)',
        borderColor: 'rgb(51, 50, 46)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[29, 135, 13, 70],
        scanGaps: false,
      }
    ]
    }

    return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  }*/

  /*getDoughnutChart(){
    const data = {
      labels: ['Tar-1', 'Tar-2', 'Tar-3', 'Tar-4', 'Tar-5', 'Tar-6','Tar-7'],
      datasets: [{
        label: 'Teste Chart',
        data: [300, 75, 224, 28, 102, 380, 350],
        backgroundColor: ['#7270B5', '#C86FA7', '#ACB9C9', '#10537D', '#F9DB6A', '#69C8C5', '#E85154']
      }]
    }

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }*/

  getPieChart(){
    const data = {
      labels: [],
      datasets: [{
        data: [300, 75, 224, 28, 102, 380, 350],
        backgroundColor: ['#7270B5', '#C86FA7', '#ACB9C9', '#10537D', '#F9DB6A', '#69C8C5', '#E85154']
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  ngOnInit() {
    this.consultar();
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
    return new Promise(resolve => {
      this.objetivos = [];

      const result = {
        labels: [''],
        datasets: [{
          data: [],
          backgroundColor: ['']
        }]
      }

      let dados = {
        requisicao: "mass",
        
      };

      this.provider.post(dados, 'objetivo.php').subscribe(
        data => {
          if(data['sucesso']) {
            this.objetivos = [];
            
            for(let item of data['objetivos']) {
              this.objetivos.push(item);
            }

            console.log(this.objetivos);

            for(let item of data['objetivos']) {
              result.labels.push(item['descricao']);
              result.datasets.push({
                data: item['prioridade'],
                backgroundColor: ['#7270B5', '#C86FA7', '#ACB9C9', '#10537D', '#F9DB6A', '#69C8C5', '#E85154']
              });
            }
            
            console.log(result);

          } else {
            this.retorno(data['mensagem'], 'danger');
          }

          resolve(true);

          return this.getChart(this.pieCanvas.nativeElement, 'pie', result);
        }
      );
    });
  }
}
