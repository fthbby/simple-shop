import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function AddToCart() {
  return (
    <Box
      border={"2px solid red"}
      padding={3}
      textTransform={"uppercase"}
      color="red"
      width={125}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={14}
      fontWeight={600}
      sx={{
        transition: "color 0.3s ease-in-out, background 0.3s ease-in-out",
        "&:hover": {
          color: "black",
          background:'red'
        },
      }}
    >
      Add To Cart
    </Box>
  );
}

export default AddToCart;
