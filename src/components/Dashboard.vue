<template>

  <div class="dashboardColumns">
    <div class="dashboardColumn">
      <div class="dashboardContainer">
      <h1 class="dashboardTitle">Inscritos</h1>

    <div class="dashboardChart">
      <vue-apex-charts
        type="bar"
        :options="options"
        :series="series"
        height="150"
      />
      </div>
    </div> 


      <div class="dashboardLinesContainer">
        <vue-apex-charts
          type="area"
          :options="optionsLine"
          :series="series"
          height="180"
          width="520"
        />
        <div class="calendarContainer">
          <Calendar expanded trim-weeks borderless  :attributes='attributes'/>
        </div>
        </div>
    </div>
    <div class="dashboardRow">
      <div class="dashBoardContainerPie">
      <vue-apex-charts
          type="donut"
          :options="optionsPie"
          :series="seriesPie"
          height="220"
        />

        <div class="dashboardTitlePie">
          Curso A
        </div>

        <div class="separador"></div>

        <div class="dashboardTitlePie">
          Curso B
      </div>
      <div class="separador"></div>
      </div>  
 </div>  
  </div>



  
</template>

<script>

import VueApexCharts from "vue3-apexcharts";
import { Calendar} from 'v-calendar';
import 'v-calendar/style.css';



export default {
  name: "DashboardMain",
  components: {
    VueApexCharts,
    Calendar,
  },

  data() {
    return {

  attributes: [
    {
    key: 'today',
    highlight: {
      color: '#0a3357',
      fillMode: 'solid',
      contentClass: 'italic',
    },
    dates: [
      new Date(2023, 3, 4),
      [new Date(2023, 3, 12), new Date(2023, 3, 13)],
    ],
  },
  {
    highlight: {
      color: 'orange',
      fillMode: 'solid',
      contentClass: 'italic',
    },
    dates: new Date(2023,3, 25),
  },
  {
    // Object
    content: {
      color: 'red',
    },
    dates: {
      repeat: {
        every: [1, 'weeks'],
        weekdays: 1,
      },
    },
  },
  ],


  options: {
        chart: {
      type: 'bar',
      height: 150,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '65%',
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP'],
    },
    yaxis: {
      min: 10,
      max: 50,
      tickAmount: 5,
      forceNiceScale: true,
    },
    fill: {
      opacity: 1,
    },
    colors: ['#fd9e15', '#0a3357'],
    legend: {
      fontSize: '20px',
      position: 'right',
    },
  },
  optionsLine: {
    chart: {
        type: 'area',
        height: '20%',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      fill: {
          opacity: 1,
          gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.3,
              stops: [0, 90, 100],
          },
      },

      grid: {
        borderColor: "#555",
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
          labels: {
              show: false,
          },
      },
    yaxis: {
      show: false,
      min: 10,
      max: 50,
      forceNiceScale: true,
    },
    colors: ['#fd9e15', '#0a3357'],
    legend: {
      fontSize: '20px',
      position: 'left',
    },
  },

  optionsPie: {
    chart: {
        type: 'pie',
        height: 250,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
            total: {
                show: true,
                label: '',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              } 
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
        offsetY: -40,
      },
      fill: {
        colors: ['#fd9e15', '#0a3357'],
      },
      legend: {
        show: false,
      },
  },

  series: [
    {
      name: 'Curso A',
      data: [20, 28, 19, 23, 35, 25, 33, 23, 30],
    },
    {
      name: 'Curso B',
      data: [38, 42, 32, 14, 30, 43, 20, 25, 20],
    },
  ],

  seriesPie: [
    45, 55
  ],
  date: new Date(),
    };
    

}
  
}
</script>

<style>

.calendarContainer{
  position: relative;
  width: 100%;
  margin-left: 3rem;
  border: none;
}

.dashboardLinesContainer{
  display: flex;
  flex-direction: row;
  width: 850px;
  background-color: white ;
  box-shadow: 0 0 10px rgba(4, 4, 4, 0.2);
}

.dashBoardContainerPie{
  display: flex;
  flex-direction: column;
  height: 32rem;
  margin-top: 1rem;
}

.dashboardContainer{
  display: flex;
  flex-direction: column;
  width: 850px;
  box-shadow: 0 0 10px rgba(5, 5, 5, 0.2);
  background-color:rgb(255, 255, 255) ;
}

.dashboardTitle{
  font-size: 2rem;
  font-weight: bolder;
  color: #333;
  margin-left: 2.4rem;
  margin-top: 15px;
  align-self: flex-start;
}

.dashboardChart{
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.dashboardColumn{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 84%;
  height: 100%;
  margin-top: 1rem;
  margin-left: 2rem;
}
.dashboardColumns{
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.dashboardRow{
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 65vh;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
}


.dashboardTitlePie{
  font-size: 1.5rem;
  text-align: center;
  margin-top: 15px;
}

.separador{
  width: 50%;
  height: 1px;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  background-color: #E9E6E6;
  margin-top: 10px;
  margin-bottom: 1rem;
}
</style>