import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Product from "./components/Product";

function Store({ fadeIn }) {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      pt={"20%"}
      flexDirection={"column"}
      sx={{ transition: "opacity .3s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      <Box width={{ xs: "90%", sm: "70%", md: "70%" }}>
        <Typography
          color="#C97878"
          fontWeight={600}
          fontSize={12}
          letterSpacing={1}
          textAlign={"center"}
          pb={3}
        >
          EVERYTHING YOU NEED TO KNOW ABOUT AVO COUNTY.
        </Typography>
        <Typography textAlign={"center"} fontSize={12} fontFamily={'Sometype Mono'}>
          Mollit pariatur aliquip mollit labore ut sunt. Adipisicing id qui
          veniam nostrud cillum do eu occaecat ullamco quis deserunt sit amet.
          <br />
          Enim in id proident nostrud cillum eu dolor anim. Magna veniam do anim
          elit aliquip adipisicing dolore consequat velit esse.
          <br />
          Exercitation do adipisicing veniam voluptate nostrud proident minim
          aliqua sunt tempor.
        </Typography>
      </Box>

      <Grid container marginTop={20} >
        {products.map((data) => (
          <Grid item xs={6} md={4} lg={4} display='flex' alignItems={'center'} justifyContent={'center'}>
            <Product data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Store;
