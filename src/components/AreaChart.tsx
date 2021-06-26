import React from "react";
import Chart from "react-apexcharts";
import { tradingData, ApexOptionsType } from '../types';

interface Props {
  data: tradingData[],
  extractColor: Function;
}

type dataSetType = {
  name: string;
  color: string;
  data: any;
}

export const AreaChart: React.FC<Props> = (props) => {
  const dataSets: dataSetType[] = [];
  let previousColor = null;
  for (const element of props.data.sort((a, b) => a.x - b.x)) {
    const color = props.extractColor(element);
    let dataSet;
    if (dataSets.length === 0 || previousColor !== color) {
      const previousDataSet = dataSets.length !== 0 ? dataSets[dataSets.length - 1] : null;
      dataSet = {
        name: `${element.verdict} verdict`,
        color: color,
        data:
          previousDataSet === null
            ? []
            : [previousDataSet.data[previousDataSet.data.length - 1]]
      };
      dataSets.push(dataSet);
    } else {
      dataSet = dataSets[dataSets.length - 1];
    }
    // add point
    dataSet.data.push([element.x, element.y]);
    // update previous element's color
    previousColor = color;
  }

  const options: ApexOptionsType = {
    chart: {
      type: "area",
      toolbar: {
        show: false
      },
      animations: {
        enabled: false
      }
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      curve: "smooth",
      colors: [(series: any,) => dataSets[series.seriesIndex]?.color || "black"],
      width: 2
    },
    fill: {
      colors: [(series: any,) => dataSets[series.seriesIndex]?.color || "black"],
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
        color: "#36393C",
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
    }
  };

  return <Chart type="area" width="500" options={options} series={dataSets} />;
};

