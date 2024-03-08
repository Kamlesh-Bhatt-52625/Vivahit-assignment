import { useState } from "react";

import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className='text-[#888] font-[500] text-[1rem] hover:text-[#fff] transition-all duration-200 cursor-pointer' />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className='w-[40vw] bg-[#111] h-screen p-6 '>
          <Link to={"/"}>
            <p className='text-[#888] font-[500] text-[1rem] hover:text-[#fff] transition-all duration-200 cursor-pointer pb-3'>
              Home
            </p>
          </Link>
          <Link to={"/dashboard"}>
            <p className='text-[#f3993a] font-[500] text-[1rem] transition-all duration-200 cursor-pointer'>
              Dashboard
            </p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
