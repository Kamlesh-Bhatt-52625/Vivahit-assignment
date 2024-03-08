import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/TabsComponent";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  const options = {
    headers: { "x-cg-demo-api-key": "CG-TxieUDvsBqDEUa9dtgr2ykKw" },
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",
          options
        );
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
};

export default Dashboard;
