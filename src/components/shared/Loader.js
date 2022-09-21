import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = ({ size }) => {
  return (
    <Box sx={{ display: "inline" }}>
      <CircularProgress color="inherit" size={size} />
    </Box>
  );
};

export default Loader;
