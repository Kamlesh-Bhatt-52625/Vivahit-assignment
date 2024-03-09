import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-[92%] mt-32 mx-auto bg-[#111] text-[#f3993a] absolute z-[1000]'>
      <CircularProgress
        sx={{
          color: "var(--orange)",
        }}
      />
    </div>
  );
};

export default Loader;
