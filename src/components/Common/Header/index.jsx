import { Link } from "react-router-dom";
import AnchorTemporaryDrawer from "./drawer";

const Header = () => {
  return (
    <div className='flex justify-between items-center py-6 px-12 bg-[#111] sticky top-0 left-0 z-50'>
      <h1 className=''>          
        Crypto Dashboard<span className='text-[#f3993a]'>.</span>
      </h1>
      <div className='sm:flex hidden justify-end items-center gap-6 '>
        <p className='text-[#888] font-[500] text-[1rem] hover:text-[#fff] transition-all duration-200 cursor-pointer'>
          Home
        </p>
        <p className='text-[#f3993a] font-[500] text-[1rem] hover:text-[#111] hover:bg-[#f3993a] hover:rounded-sm px-3 transition-all duration-200 cursor-pointer'>
          Dashboard
        </p>
      </div>

      <div className='sm:hidden block'>
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
