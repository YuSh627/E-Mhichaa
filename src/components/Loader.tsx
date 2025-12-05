import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader: React.FC = () => (
  <Box
    sx={{
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1300,
    }}>
    <CircularProgress size={40} thickness={5} />
  </Box>
);

export default Loader;
