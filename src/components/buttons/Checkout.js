import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function Checkout() {
  return (
    <Box
    //   onClick={addTodoItem}
      border={"2px solid red"}
      padding={3}
      textTransform={"uppercase"}
      color="red"
    //   width={'100%'}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={14}
      fontWeight={600}
      sx={{
        cursor: "pointer",
        transition: "color 0.3s ease-in-out, background 0.3s ease-in-out",
        "&:hover": {
          color: "black",
          background: "red",
        },
      }}
    >
     Checkout
    </Box>
  );
}

export default Checkout;
