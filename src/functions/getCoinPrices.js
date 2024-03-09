const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-TxieUDvsBqDEUa9dtgr2ykKw" },
};

export const getCoinPrices = async (id, days) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
    options
  );
  const data = await res.json();

  return data.prices;
};
