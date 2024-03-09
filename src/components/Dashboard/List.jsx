import { Tooltip } from "@mui/material";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../functions/convertNumber";

const List = ({ coindata }) => {
  return (
    <div className='m-2 flex justify-evenly md:text-sm w-[90%] bg-[#1b1b1b] my-6 mx-auto rounded-xl py-0 px-2'>
      <div>
        <img
          src={coindata.image}
          alt=''
          className='sm:w-20 sm:h-20 w-14 h-14 p-2'
        />
      </div>

      <div className='mt-2 sm:block hidden'>
        <p className='sm:text-2xl text-xl uppercase font-semibold text-[#fff]'>
          {coindata.symbol}
        </p>
        <p className='sm:text-lg text-sm font-semibold text-[#888]'>
          {coindata.name}
        </p>
      </div>

      <Tooltip title='Coin Price Percentage In 24hrs' placement='bottom-start'>
        {coindata.price_change_percentage_24h >= 0 ? (
          <td>
            <div className='flex mt-3 gap-2'>
              <div className='sm:flex hidden border-2 border-solid border-[#61c96f] rounded-full py-1 px-5 text-center font-semibold text-[#61c96f] text-[1rem] hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
                {coindata.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='sm:flex hidden border-2 border-solid border-[#61c96f] rounded-full w-8 h-8 justify-center items-center text-[#61c96f] text-[1rem] hover:bg-[#61c96f] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
                <TrendingUpRoundedIcon />
              </div>
            </div>
          </td>
        ) : (
          <td>
            <div className='flex mt-3 gap-3'>
              <div className='border-2 border-solid border-[#f94141] rounded-full py-1 px-5 text-center font-semibold text-[#f94141] text-[1rem] hover:bg-[#f94141] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
                {coindata.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='border-2 border-solid border-[#f94141] rounded-full w-8 h-8 flex justify-center items-center text-[#f94141] text-[1rem] hover:bg-[#f94141] hover:text-[#fff] hover:transition-all hover:duration-200 cursor-pointer'>
                <TrendingDownRoundedIcon />
              </div>
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title='Coin Price In USD' placement='bottom-end'>
        {coindata.price_change_percentage_24h >= 0 ? (
          <td className='flex mt-3  text-[#61c96f] pt-1  font-semibold'>
            ${coindata.current_price.toLocaleString()}
          </td>
        ) : (
          <td className='flex mt-3  text-[#f94141] pt-1 font-semibold'>
            ${coindata.current_price.toLocaleString()}
          </td>
        )}
      </Tooltip>

      <Tooltip title='Coin Total Volume' placement='bottom-end'>
        <p className='md:flex hidden mt-3 pt-1 text-[#888]'>
          {coindata.total_volume.toLocaleString()}
        </p>
      </Tooltip>
      <Tooltip title='Coin Market Capital' placement='bottom-end'>
        <p className='md:flex hidden mt-3 pt-1 text-[#888]'>
          ${coindata.market_cap.toLocaleString()}
        </p>
      </Tooltip>

      {/* For medium devices */}
      <Tooltip title='Coin Total Volume' placement='bottom-end'>
        <p className='md:hidden flex mt-3 pt-1 text-[#888]'>
          {convertNumber(coindata.total_volume)}
        </p>
      </Tooltip>
      <Tooltip title='Coin Market Capital' placement='bottom-end'>
        <p className='md:hidden flex mt-3 pt-1 text-[#888]'>
          ${convertNumber(coindata.market_cap)}
        </p>
      </Tooltip>
    </div>
  );
};

export default List;
