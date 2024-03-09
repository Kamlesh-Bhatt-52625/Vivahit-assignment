import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/TabsComponent";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    let previoudIndex = (value - 1) * 12;
    setPaginatedCoins(coins.slice(previoudIndex, previoudIndex + 12));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const options = {
    headers: { "x-cg-demo-api-key": "CG-TxieUDvsBqDEUa9dtgr2ykKw" },
  };

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1",
          options
        );
        const data = await res.json();
        console.log(data);
        setCoins(data);
        setPaginatedCoins(data.slice(0, 12));
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent
        loading={loading}
        coins={search ? filteredCoins : paginatedCoins}
      />
      {!search && !loading && (
        <PaginationComponent page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Dashboard;
