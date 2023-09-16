import React from "react";
import { CircularProgress } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const Loading = () => {
  return (
    <div>
      <CircularProgress color="primary" size={80} thickness={4} />
    </div>
  );
};

export default Loading;
