import multiplePlot from '../assets/multipleplots.png';
import singlePlot from '../assets/singleplot.png';
import noplot from '../assets/noplot.png';

export const trendsData = [{
  amount: '$34,346.00',
  amountPercentage: '20%',
  data: [4, 8, -6, 0, 8, 0, -2, -4, 4],
  strokeColor: "#9ac802",
  invertedAreaGraph: multiplePlot,
},
{
  amount: '$329,146.00',
  amountPercentage: '82%',
  data: [4, 8, -6, 0, 8, 0, -2, -4, 4],
  strokeColor: "#9ac802",
  invertedAreaGraph: multiplePlot,
},
{
  amount: '$129,146.00',
  amountPercentage: '61.5%',
  data: [4, 8, -6, 0, 8, 0, -2, -4, 4],
  strokeColor: "#9ac802",
  invertedAreaGraph: multiplePlot,
},
{
  amount: '$46.00',
  amountPercentage: '5%',
  data: [-8, 6, -4, 2, 0, -2, 4, -6, -3],
  strokeColor: "#FA4F4F",
  invertedAreaGraph: singlePlot,
},
{
  amount: '$00.00',
  amountPercentage: '0%',
  data: [-8, 6, -4, 2, 0, -2, 4, -6, 0],
  strokeColor: "#666E79",
  invertedAreaGraph: noplot,
}]

export const tradingHistoryData = [
  { x: 1, y: 200, verdict: "win" },
  { x: 2, y: 305, verdict: "win" },
  { x: 3, y: 407, verdict: "win" },
  { x: 4, y: 402, verdict: "loss" },
  { x: 5, y: 301, verdict: "loss" },
  { x: 6, y: 412, verdict: "win" },
  { x: 7, y: 518, verdict: "win" },
  { x: 8, y: 740, verdict: "win" },
  { x: 9, y: 600, verdict: "loss" },
  { x: 10, y: 357, verdict: "loss" },
  { x: 11, y: 690, verdict: "win" },
  { x: 12, y: 807, verdict: "win" },
  { x: 13, y: 920, verdict: "win" },
  { x: 14, y: 490, verdict: "loss" },
  { x: 15, y: 370, verdict: "loss" },
  { x: 16, y: 260, verdict: "loss" }
];
