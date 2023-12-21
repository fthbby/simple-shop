import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Checkout from "../../../components/buttons/Checkout";


function TotalCheckout() {
  return (
    <Grid container pt={3} justifyContent={"flex-end"}>
      <Grid item xs={0} sm={8} md={8} />
      <Grid item xs={12} sm={4} md={4}>
        <Box pb={3} display="flex" justifyContent={"space-between"}>
          <Typography>Subtotal</Typography> $10
        </Box>

        <Checkout />
      </Grid>
    </Grid>
  );
}

export default TotalCheckout;
