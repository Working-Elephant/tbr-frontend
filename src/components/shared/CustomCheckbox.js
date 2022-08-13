import React from "react";
import { yellow, grey } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const CustomCheckbox = ({ isChecked, handleChange }) => {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    //   <div> <Checkbox
    //   {...label}
    //   // defaultChecked
    //   classes={`border-2`}
    //   sx={{
    //     color: grey[400],
    //     '&.Mui-checked': {
    //       color: yellow[600],
    //     },

    //   }}
    // /></div>
    // <div className="mr-2 text-start" style={{ width: "max-content" }}>
    //   <label className="checkbox-container block relative pl-8 mb-3 cursor-pointer text-xl [-webkit-user-select:none] [-moz-user-select:none] [-ms-user-select:none] [user-select:none] hover:bg-[#ccc] ">
    //     <span className="ms-2">Select all Users</span>
    //     <input
    //     className="absolute opacity-0 cursor-pointer h-0 w-0 checked:bg-yellow checked:text-yellow"
    //       type="checkbox"
    //       checked={isChecked}
    //       value="Users"
    //       onChange={handleChange}
    //       // onClick={showModal}
    //     />
    //     <span className="checkmark absolute opacity-0 cursor-pointer h-5 w-5 rounded bg-transparent after:absolute after:hidden"></span>
    //   </label>
    // </div>
    <div className="ms-4 text-start" style={{ width: "max-content" }}>
            <label className="checkbox-container ">
              {/* <span className="ms-2">Select all Users</span> */}
              <input
                type="checkbox"
                checked={isChecked}
    //       value="Users"
          onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
  );
};

export default CustomCheckbox;
