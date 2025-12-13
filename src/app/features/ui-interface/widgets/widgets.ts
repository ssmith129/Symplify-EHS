import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AllRoutes } from '../../../shared/routes/routes';
import { MatTooltipModule } from '@angular/material/tooltip';
export interface ChartOptions  {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-widgets',
  imports: [NgApexchartsModule,RouterLink,MatTooltipModule] ,
  templateUrl: './widgets.html',
  styleUrl: './widgets.scss'
})
export class Widgets {
AllRoutes=AllRoutes
  @ViewChild('chart')
  chart!: ChartComponent;

  public Chart1: Partial<ChartOptions> | any;
  public Chart2: Partial<ChartOptions> | any;
  public Chart3: Partial<ChartOptions> | any;
  public Chart4: Partial<ChartOptions> | any;
  public Chart5: Partial<ChartOptions> | any;
  public Appointment: Partial<ChartOptions> | any;
  public PatientChart: Partial<ChartOptions> | any;
  public isDarkTheme =
      document.documentElement.getAttribute("data-bs-theme") === "dark";
  ngOnInit():void{
    this.Chart1={
      chart: {
        width: '100%',
        height: 54,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#1F6DB2']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#1F6DB2",
              opacity: 0.5
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0
            }
          ]
        }
      },
      dataLabels: { enabled: false },
      series: [{
        name: 'Data',
        data: [12, 14, 15, 14, 18, 20, 20, 22, 23,20]
      }],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }   
      },
      yaxis: { show: false },
      grid: { show: false },
       tooltip: {
          enabled: true,
          
        }
    },
    this.Chart2={
      chart: {
        width: '100%',
        height: 54,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#E65100']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#E65100",
              opacity: 0.5
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0
            }
          ]
        }
      },
      dataLabels: { enabled: false },
      series: [{
        name: 'Data',
        data: [12, 14, 15, 20, 18, 20, 20, 10, 23,20]
      }],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { show: false },
      grid: { show: false },
        tooltip: {
          enabled: true,
          
        }
    }
    this.Chart3=
      {
        chart: {
          width: '100%',
          height: 54,
          type: 'area',
          toolbar: { show: false },
          sparkline: { enabled: true }
        },
        stroke: {
          curve: 'smooth',
          width: 2,
          colors: ['#6A1B9A']
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.9,
            stops: [0, 90, 100],
            colorStops: [
              {
                offset: 0,
                color: "#6A1B9A",
                opacity: 0.5
              },
              {
                offset: 100,
                color: "#ffffff",
                opacity: 0
              }
            ]
          }
        },
        dataLabels: { enabled: false },
        series: [{
          name: 'Data',
          data: [12, 14, 15, 20, 18, 20, 20, 28, 20,25]
        }],
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: {
            enabled: true,
           
      }
    }
    this.Chart4={
      chart: {
        width: '100%',
        height: 54,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#CC25B0']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.9,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#CC25B0",
              opacity: 0.5
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0
            }
          ]
        }
      },
      dataLabels: { enabled: false },
      series: [{
        name: 'Data',
        data: [12, 14, 2, 14, 18, 10, 20, 28, 5, 25]
      }],
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: {
          enabled: true,
          
    }
    }
    this.Appointment= {
      series: [20, 15, 15, 10, 20, 20, 10],
      chart: {
        type: "donut",
        height: 180,
      },
      labels: [
        "Cardiology",
        "Neurology",
        "Neurology",
        "Dermatology",
        "Orthopedics",
        "Urology",
      ],
      colors: [
        "#3189A1",
        "#7736A4",
        "#EB642F",
        "#FEB746",
        "#3F51A9",
        "#3683D7",
        "#FF5C8D"
      ],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: false,
          donut: {
            size: "85%",
            labels: {
              show: false,
            },
          },
          borderRadius:12
        },
      },
      stroke: {
        colors: [this.isDarkTheme ? "transparent" : "#fff"],
        borderRadius:12
      },
      dataLabels: { enabled: false },
      tooltip: {
        enabled: false,
        theme: this.isDarkTheme ? "dark" : "light",
        y: {
          formatter: (value: number, opts?: any) => {
            return `${opts.w.globals.labels[opts.seriesIndex]}: ${value}%`;
          },
        },
      },
      legend: { show: false },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { height: 200 },
          },
        },
      ],
    }
    this.PatientChart={
        series: [100, 80],
        chart: {
            height: 200,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: -20,
                background: '#000',
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 15,
                    size: '60%',
                    background: '#fff'
                },
                track: {
                    background: '#fff',
                    strokeWidth: '0',
                    strokeColors: "#fff",
                    margin: 6,
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#0F172A',
                        offsetY: -5
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        color: '#0F172A',
                        offsetY: 5,
                        fontWeight: 700,
                        formatter: function (val:any) {
                            return val + ""
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total Patients',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#334155',
                    }
                }
            }
        },
        stroke: {
            dashArray: 4,
            width: 5
        },
        colors: [
            '#1F6DB2',
            '#6A1B9A',
        ],
        labels: ['Male', 'Female'],
    }
    this.Chart5={
      chart: {
        type: 'bar',
        height: 290,
        stacked: true,
        toolbar: { show: false },
        sparkline: { enabled: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        }
      },
      dataLabels: { enabled: false },
      stroke: {
        show: false
      },
      series: [
        {
          name: 'New Patients',
          data: [25, 30, 70, 25, 20, 40, 35]
        },
        {
          name: 'Old Patients',
          data: [20, 25, 15, 75, 50, 25, 10],
        }
      ],
      colors: ['#1F6DB2', '#BCD3E8'],
      xaxis: {
        categories: ['25 May', '26 May', '27 May', '28 May', '29 May', '30 May', '31 May'],
        labels: {
          style: {
            fontSize: '14px'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tickPlacement: 'between'
      },
      yaxis: {
        max: 100,
        labels: {
          align: 'left',           // align text left
          offsetX: -15,            // move closer to the chart edge
          style: {
            fontSize: '14px'
          },
          formatter: function (val:any) {
            return val;
          }
        }
      },
      legend: { show: false },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 0,
          right: -20
        }
      },
      tooltip: {
        enabled: true,
        shared: true,
        intersect: false
      }
    }

}
}
