import { Component, inject } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule, provideEcharts } from 'ngx-echarts';
import { Registro } from '../../../models/registro';
import { RegistroService } from '../../../services/registro.service';
import { MovimentoHora } from '../../../models/movimentoHora';
import { PicoDia } from '../../../models/picoDia';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [
    provideEcharts(),
  ]
})
export class DashboardComponent {

  chartOption!: EChartsOption;
  chartOption2!: EChartsOption;

  lista: Registro[] = [];
  picoHora !: string;
  picoTotal !: number;

  totalHoje !: number;
  hojeVsOntem!: number;

  registroService = inject(RegistroService);

  constructor() {
    //this.findAll();
    this.carregarGraficoSemana();
    this.carregarGraficoHora();
    this.carregarPicoDia();
    this.carregarTotalHoje();
    this.carregarHojeVsOntem();
  }

  findAll() {
    this.registroService.findAll().subscribe({
      next: lista => { // quando o back retornar o que se espera
        this.lista = lista;
      },
      error: erro => {//quando ocorrer qualquer erro (badrequest, exceptions...)
        alert('Ocorreu algum erro');
      }
    });
  }

  carregarGraficoSemana() {
    this.registroService.movimentoSemana().subscribe(dados => {

      this.chartOption2 = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Esta semana', 'Semana passada']
        },
        xAxis: {
          type: 'category',
          data: dados.labels,
          axisLabel: {
            rotate: 45,
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Esta semana',
            type: 'line',
            data: dados.semanaAtual,
            label: {
              show: true,
              position: 'top'
            }
          },
          {
            name: 'Semana passada',
            type: 'line',
            data: dados.semanaAnterior,
            label: {
              show: true,
              position: 'top'
            }
          }
        ]
      };

    });
  }

  carregarGraficoHora() {
    this.registroService.movimentoHora().subscribe({
      next: (dados: MovimentoHora[]) => {

        const horas = dados.map(d => d.hora);
        const totais = dados.map(d => d.total);

        this.chartOption = {
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: horas,
            axisLabel: {
              interval: 0
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Pessoas',
              type: 'bar',
              data: totais,
              label: {
                show: true,
                position: 'top',
                formatter: '{c}'
              }
            }
          ]
        };
      },
      error: erro => {
        console.error('Erro ao carregar gráfico', erro);
      }
    });

  }

  carregarPicoDia() {
    this.registroService.getPicoDia().subscribe({
      next: (res: PicoDia) => {

        // proteção contra null / 204
        if (!res) {
          this.picoHora = 'Sem dados hoje';
          this.picoTotal = 0;
          return;
        }

        this.picoHora = res.intervalo;
        this.picoTotal = res.total;
      },
      error: erro => {
        console.error('Erro ao carregar pico do dia', erro);
      }
    });
  }

  carregarTotalHoje(){
    this.registroService.getTotalHoje().subscribe({
      next: (total) => {
        this.totalHoje = total;
      },
      error: (erro) => {
        console.error('Erro ao buscar total de hoje', erro);
      }
    });
  }
  carregarHojeVsOntem(){
    this.registroService.getHojeVsOntem().subscribe({
      next: (valor) => {
        this.hojeVsOntem = valor;
      },
      error: (erro) => {
        console.error('Erro ao buscar valor de ontem vs hoje', erro);
      }
    });
  }

}
