import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CartCard({ data, onRemoveFromCart }) {
  return (
    <>
      <Grid item xs={5} sm={2} md={2}>
        <img src={data.image} height={150} width={150} />
      </Grid>
      <Grid item xs={0} sm={1} md={1} />
      <Grid item xs={4.5} sm={5.5} md={5.5} fontFamily={"Sometype Mono"}>
        {data.title}
      </Grid>
      <Grid
        item
        xs={2}
        sm={3}
        md={3}
        display="flex"
        justifyContent={"flex-end"}
      >
        <Typography fontFamily={"Sometype Mono"}>${data.price.toFixed(2)}</Typography>
      </Grid>
      <Grid item xs={.5} display="flex" justifyContent={"flex-end"}>
        <CloseIcon
          onClick={onRemoveFromCart}
          sx={{
            color: "gray",
            cursor: "pointer",
            transition: "color 0.3s ease-in-out",
            "&:hover": {
              color: "black",
            },
          }}
        />
      </Grid>
    </>
  );
}

export default CartCard;
