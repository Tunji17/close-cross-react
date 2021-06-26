export type tradingData = {
  x: number,
  y: number,
  verdict: string,
}

export type ApexOptionsType = {
  chart: {
    type: "area" | "line",
    toolbar?: {
      show: boolean,
    },
    animations?: {
      enabled: boolean,
    },
    zoom?: {
      enabled: boolean | undefined,
    },
  };
  grid: {
    show?: boolean,
    row?: {
      colors: string[],
      opacity: number,
    },
  },
  tooltip?: {
    shared: boolean,
  };
  legend?: {
    show: boolean,
  };
  dataLabels: {
    enabled: boolean,
  };
  stroke: {
    show?: boolean,
    curve?: "smooth" | "straight" | "stepline" | ("smooth" | "straight" | "stepline")[] | undefined,
    colors?: any,
    width?: number,
  };
  fill?: {
    colors: any,
    type: string,
    gradient: {
      type?: string,
      shadeIntensity: number,
      opacityFrom: number,
      opacityTo: number,
      stops: number[],
    }
  };
  xaxis: {
    labels?: {
      show: boolean,
    },
    categories?: number[],
    axisBorder?: {
      show: boolean,
      color?: string,
      offsetX?: number,
      offsetY?: number,
      height?: number,
      width?: number,
    }
    axisTicks?: {
      show: boolean,
    }
  };
  yaxis?: {
    labels?: {
      show: boolean,
    },
    categories?: number[],
    axisBorder?: {
      show: boolean,
      color?: string,
      offsetX?: number,
      offsetY?: number,
      height?: number,
      width?: number,
    }
    axisTicks?: {
      show: boolean,
    }
  };
  position?: string;
  markers?: {
    size?: number,
    colors?: string[] | undefined,
    strokeColors?: string,
    strokeWidth?: number,
    strokeOpacity?: number,
    strokeDashArray?: number,
    fillOpacity?: number,
    shape?: string[],
    radius?: number,
    offsetX?: number,
    offsetY?: number,
  };
}
