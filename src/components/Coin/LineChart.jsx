import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData, priceType, multiAxis }) => {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interection: {
      mode: "index",
      interesect: false,
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
