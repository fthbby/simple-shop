import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import RedButton from "../../../components/buttons/RedButton";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../../stateManagement/atom/cartAtom";

function TotalCheckout() {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [total, setTotal] = useState("");
  const getCartTotal = () => {
    let total = 0;
    cart.forEach((x) => (total += x.price * x.quantity));
    setTotal(total.toFixed(2)); // Ensure total has 2 decimal places
};

  useEffect(() => {
    getCartTotal();
  }, []);

  return (
    <Grid container pt={3} justifyContent={"flex-end"}>
      <Grid item xs={0} sm={8} md={8} />
      <Grid item xs={12} sm={12} md={4}>
        <Box pb={3} display="flex" justifyContent={"space-between"}>
          <Typography fontFamily={"Sometype Mono"}>Subtotal</Typography> 

          <Typography fontFamily={"Sometype Mono"}>${total}</Typography>
        </Box>

        <RedButton text="CHECKOUT" />
      </Grid>
    </Grid>
  );
}

export default TotalCheckout;
