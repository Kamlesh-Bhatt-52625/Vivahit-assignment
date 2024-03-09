const options = {
  method: "GET",
  headers: { "x-cg-demo-api-key": "CG-TxieUDvsBqDEUa9dtgr2ykKw" },
};

export const getCoinData = async (id) => {
  let data;
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`,
      options
    );
    const res = await response.json();
    data = res;
    // console.log(response);
  } catch (error) {
    console.log("Error in getCoinData function ", error);
  }

  return data;
};
