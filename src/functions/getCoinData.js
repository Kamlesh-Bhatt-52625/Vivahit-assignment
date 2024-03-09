const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-TxieUDvsBqDEUa9dtgr2ykKw" },
};

export const getCoinData = async (id) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}`,
    options
  );
  const data = await response.json();
  console.log(response);

  return data;
};
