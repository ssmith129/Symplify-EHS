import { Component, ViewChild } from '@angular/core';
import { AllRoutes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries | any;

  chart: ApexChart | any;

  responsive: ApexResponsive | any;

  colors: any;

  dataLabels: ApexDataLabels | any;

  plotOptions: ApexPlotOptions | any;

  yaxis: ApexYAxis | any;

  xaxis: ApexXAxis | any;

  legend: ApexLegend | any;

  fill: ApexFill | any;
};
@Component({
  selector: 'app-transactions',
  imports: [RouterLink,NgApexchartsModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss'
})
export class Transactions {
AllRoutes=AllRoutes
@ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
  ) {
    this.chartOptions = {
      series: [{
        name: 'Inprogress',
        data: [60, 50, 25, 20, 60, 55, 10, 120, 30, 10, 50, 60] // 12 points
      },
      {
        name: 'Completed',
        data: [35, 30, 10, 5, 40, 5, 5, 25, 15, 5, 30, 35] // 12 points
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: '#6B7280',
            fontSize: '14px',
          }
        }
      },
      yaxis: {
        max: 120,
        labels: {
          offsetX: -15,
          style: {
            colors: '#6B7280',
            fontSize: '14px',
          }
        }
      },
      legend:{
        show: true
      },
      chart: {
        height: 290,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%', // Adjusted to make bars narrower
          barSpacing: 10,     // Adds space between the series
          borderRadius: 0,    // sharp edges
        },
      },
      colors: ['#5FA35B', '#D2675C'], // blue and teal
      dataLabels: {
        enabled: false
      },      
      fill: {
        opacity: 1
      },
    };
  }
}
