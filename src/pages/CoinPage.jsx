import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (id) {
      fetchCoinData();
    }
  }, [id, days]);

  const fetchCoinData = async () => {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        // console.log(prices);
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
        setIsLoading(false);
      }
    }
  };

  return (
    <div className=''>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className=''>
            <List coindata={coinData} />
          </div>
          <div className='block w-[90%] bg-[#1b1b1b] my-6 mx-auto rounded-lg'>
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
