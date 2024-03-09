import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices) => {
  setChartData({
    labels: prices.map((item) => convertDate(item[0])),
    datasets: [
      {
        data: prices.map((item) => item[1]),
        borderColor: "#f3993a",
        borderWidth: 2,
        fill: true,
        tension: 0.2,
        backgroundColor: "rgba(243, 153, 58, 0.1)",
        pointRadius: 2.5,
      },
    ],
  });
};
