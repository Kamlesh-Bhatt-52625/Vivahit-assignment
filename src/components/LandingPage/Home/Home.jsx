import cryptoCurrency from "../../../assets/cryptocurrency.png";

const Home = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-between items-start py-2 px-12 '>
      <div className=''>
        <h1 className='sm:text-[6rem] text-[3rem] m-0 text-[#fff]'>
          Track Crypto In
        </h1>
        <h1 className='sm:text-[6rem] text-[3rem] m-0 text-[#f3993a]'>
          Real Time.
        </h1>
        <p className='text-[1rem] text-[#888]'>
          Track crypto through a public api in real time. Go to dashboard!
        </p>
      </div>
      <div className='border border-[#f3993a] rounded-lg border-opacity-25 px-4'>
        <img src={cryptoCurrency} alt='cryptoCurrency' />
      </div>
    </div>
  );
};

export default Home;
