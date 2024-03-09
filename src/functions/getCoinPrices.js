const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-TxieUDvsBqDEUa9dtgr2ykKw" },
};

export const getCoinPrices = async (id, days, priceType) => {
  let data;
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      options
    );
    data = await res.json();
  } catch (error) {
    console.log("Error in getCoinPrices function ", error);
  }
  // console.log(priceType);

  return data[priceType];
};
