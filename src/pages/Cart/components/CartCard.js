import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


function CartCard({data}) {
  return (
    <>
      <Grid item xs={5} sm={2} md={2}>
        <img src={data.image} height={150} width={150} />
      </Grid>
      <Grid item xs={0} sm={1} md={1} />
      <Grid item xs={4} sm={5} md={5}>
        {data.title}
      </Grid>
      <Grid item xs={3} sm={4} md={4} display="flex" justifyContent={"flex-end"}>
        ${data.price}
        <CloseIcon sx={{ color: "gray" }} />
      </Grid> 
    </>
  );
}

export default CartCard;
