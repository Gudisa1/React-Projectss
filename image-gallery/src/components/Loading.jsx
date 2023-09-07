import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Loading = ({ isLoading }) => {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center" /* Center horizontally */,
    alignItems: "center" /* Center vertically */,
    height: "100vh" /* 100% viewport height */,
  };
  const loadingTextStyle = {
    fontSize: "18px", // Adjust font size to match your design
    color: "#555", // Adjust text color to match your design
    marginTop: "16px", // Add some spacing between the spinner and text
  };
  return (
    <div style={loaderStyle}>
      <CircularProgress size={60} thickness={4} color="primary" />

      <p style={loadingTextStyle}>Loading...</p>
    </div>
  );
};

export default Loading;
