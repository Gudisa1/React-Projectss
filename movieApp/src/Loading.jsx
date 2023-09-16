import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ color, size }) => {
  const [indeterminate, setIndeterminate] = useState(true);

  return (
    <CircularProgress
      color={color}
      size={size}
      indeterminate={indeterminate}
      style={{
        width: size,
        height: size,
        margin: "auto",
      }}
    />
  );
};

export default Loading;
