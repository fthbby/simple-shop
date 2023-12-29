import React from "react";
import { Button } from "@mui/material";

function MaroonButton({ onClick, title }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: "#C97878",
        color: "white",
        letterSpacing: 1,
        textTransform: "uppercase",
        padding: 1,
        paddingX: 2,
      }}
    >
      {title}
    </Button>
  );
}

export default MaroonButton;
