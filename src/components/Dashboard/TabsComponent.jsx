import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./tabsComponent.css";
import Grid from "./Grid";

const TabsComponent = ({ coins }) => {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vh",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <div className='mx-7'>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant='fullWidth'>
          <Tab label='Coins' value='grid' sx={style} />
          {/* <Tab label='List' value='list' sx={style} /> */}
        </TabList>
        <TabPanel value='grid'>
          <div className='flex justify-center items-center flex-wrap gap-4 my-2 sm:-mx-12 -mx-6'>
            {coins?.map((coin, i) => {
              return <Grid key={i} coin={coin} />;
            })}
          </div>
        </TabPanel>
        {/* <TabPanel value='list'>List</TabPanel> */}
      </TabContext>
    </div>
  );
};

export default TabsComponent;
