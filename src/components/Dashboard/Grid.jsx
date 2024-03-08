const Grid = ({ coin }) => {
  return (
    <div className='w-[350px] h-[350px] bg-[#1b1b1b] border-2 border-solid border-[#1b1b1b] rounded-md'>
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
          <div className='border-2 border-solid border-[#61c96f] rounded-full py-1 px-5 text-center font-semibold text-[#61c96f] text-[1rem] ml-6'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        </div>
      ) : (
        <div className='flex justify-start gap-4 items-center'>
          <div className='border-2 border-solid border-[#f94141] rounded-full py-1 px-5 text-center font-semibold text-[#f94141] text-[1rem] ml-6'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;
