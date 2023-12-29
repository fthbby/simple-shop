import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Product from "./components/Product";
import CustomLayout from "../../layouts/CustomLayout";
import * as productAPI from "../../api/routes/product";

function Store({}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      let res = await productAPI.getAll();
      console.log("res :", res.data.data);
      if (res.data.success) {
        setProducts(res.data.data);
      }

      setIsLoading(false);
    } catch (err) {}
    // setIsLoading(true);
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setProducts(json));
    // setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <CustomLayout title={"EVERYTHING YOU NEED TO KNOW ABOUT AVO COUNTY."}>
      <Box width={{ xs: "90%", sm: "70%", md: "70%" }}>
        <Typography
          textAlign={"center"}
          fontSize={12}
          fontFamily={"Sometype Mono"}
        >
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

      {isLoading ? (
        "LOADING"
      ) : (
        <Grid
          container
          marginTop={20}
          display="flex"
          justifyContent={"space-between"}
          sx={{
            transition: "opacity 1.5s ease-in-out",
            opacity: fadeIn ? 1 : 0,
          }}
        >
          {products.map((data) => (
            <Grid
              item
              xs={6}
              md={3.75}
              lg={3.75}
              display="flex"
              pb={10}
              justifyContent={"center"}
            >
              <Product data={data} />
            </Grid>
          ))}
        </Grid>
      )}
    </CustomLayout>
  );
}

export default Store;
