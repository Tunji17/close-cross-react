import React from "react";
import Chart from "react-apexcharts";
import { ApexOptionsType } from '../types';

interface Props {
  data: number[],
  strokeColor: string,
}

type seriesType = [{
  name: string,
  data: number[],
}];

export const TimeSeriesChart: React.FC<Props> = (props) => {
  const series: seriesType = [{
      name: "trends",
      data: props.data,
  }];

  const options: ApexOptionsType = {
    chart: {
      type: 'area',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: [props.strokeColor],
      width: 1,
    },
    grid: {
      show: false,
    },
    fill: {
      colors: [(series: any,) => props.strokeColor === "#666E79"? "#212529" : props.strokeColor ],
      type: "gradient",
      gradient: {
        type: "diagonal1",
        shadeIntensity: 0,
        opacityFrom: 0.6,
        opacityTo: 0.2,
        stops: [0, 50, 100]
      }
    },
    xaxis: {
      categories: [-9, -8, -6, -4, -3, -1, 0, 1, 3, 4, 6, 8, 9],
      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
        offsetX: -20,
        offsetY: -54,
        height: 0.2,
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
      categories: [-9, -8, -6, -4, -3, -1, 0, 1, 3, 4, 6, 8, 9],
      axisBorder: {
        show: true,
        offsetX: 130,
        offsetY: -10,
        width: 0.2,
      },
    },
    position: 'left',
    markers: {
      size: 0,
      colors: undefined,
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      shape: ["circle"],
      radius: 2,
      offsetX: -20,
      offsetY: -54,
    },
  };

  return <Chart type="area" width="400" options={options} series={series} height={150} />;
};

