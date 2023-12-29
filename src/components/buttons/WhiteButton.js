import React from "react";
import { Button } from "@mui/material";

function WhiteButton({ onClick, title }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: "white",
        color: "#C97878",
        letterSpacing: 1,
        textTransform: "uppercase",
        padding: 1,
        paddingX: 2,
        border:'1.5px solid #C97878',
      }}
    >
      {title}
    </Button>
  );
}

export default WhiteButton;
