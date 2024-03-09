import { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PriceType({priceType, handlePriceTypeChange}) {
  return (
    <div className='flex items-center justify-center m-4'>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "var(--orange) !important",
          },
          borderColor: "var(--orange)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--orange)",
          },
        }}>
        <ToggleButton
          value='prices'
          className='md:text-[1rem] md:p-3 sm:text-[0.7rem] sm:p-2 text-[0.5rem] p-1'>
          Price
        </ToggleButton>
        <ToggleButton
          value='market_caps'
          className='md:text-[1rem] md:p-3 sm:text-[0.7rem] sm:p-2 text-[0.5rem] p-1'>
          Market Cap
        </ToggleButton>
        <ToggleButton
          value='total_volumes'
          className='md:text-[1rem] md:p-3 sm:text-[0.7rem] sm:p-2 text-[0.5rem] p-1'>
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
