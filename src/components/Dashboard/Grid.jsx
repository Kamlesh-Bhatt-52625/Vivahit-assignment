import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const Grid = ({ coin }) => {
  return (
    <div
      className={`w-[320px] h-[320px] bg-[#1b1b1b] border-2 border-solid border-[#1b1b1b] rounded-md hover:border-[#61c96f] hover:transition-all hover:duration-200 ${
        coin.price_change_percentage_24h < 0 &&
        "hover:border-[#f94141] hover:transition-all hover:duration-200"
      }`}>
      <div className='flex justify-start items-center gap-4 my-4 mx-6'>
        <img src={coin.image} alt={coin.name} className='h-14 w-14' />
        <div className='flex flex-col gap-2'>
          <p className='text-[#fff] uppercase font-semibold text-[1.2rem] m-0'>
            {coin.symbol}
          </p>
          <p className='text-[#888] capitalize font-light text-[1rem] m-0'>
            {coin.name}
          </p>
        </div>
      </div>

      {coin.price_change_percentage_24h > 0 ? (
        <div className='flex justify-start gap-4 items-center'>
          <div className='border-2 border-solid border-[#61c96f] rounded-full py-1 px-5 text-center font-semibold text-[#61c96f] text-[1rem] ml-6 hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='border-2 border-solid border-[#61c96f] rounded-full w-8 h-8 flex justify-center items-center text-[#61c96f] text-[1rem] hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className='flex justify-start gap-4 items-center'>
          <div className='border-2 border-solid border-[#f94141] rounded-full py-1 px-5 text-center font-semibold text-[#f94141] text-[1rem] ml-6 hover:bg-[#f94141] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='border-2 border-solid border-[#f94141] rounded-full w-8 h-8 flex justify-center items-center text-[#f94141] text-[1rem] hover:bg-[#f94141] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className='m-6'>
        <h3
          className='text-[#61c96f] text-lg font-semibold'
          style={{
            color: coin.price_change_percentage_24h < 0 ? "#f94141" : "61c96f",
          }}>
          ${coin.current_price.toLocaleString("us")}
        </h3>
        <p className='mt-4 text-[#888] text-[1rem] font-medium'>
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className='text-[#888] text-[1rem] font-medium'>
          Market Cap : {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
