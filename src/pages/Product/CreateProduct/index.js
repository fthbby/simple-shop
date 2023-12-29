import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import CustomLayout from "../../../layouts/CustomLayout";
import CreateProductModal from "../../../components/modals/CreateProductModal";
import MaroonButton from "../../../components/buttons/MaroonButton";
import * as productAPI from "../../../api/routes/product";
import ProductList from "./ProductList";
import ProductModal from "../../../components/modals/ProductModal";

function CreateProduct() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      let res = await productAPI.getAll();
      console.log("res :", res.data.data);
      setProducts(res.data.data);
    } catch (err) {
      console.log("err:", err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //   const onProduct = () => {
  //     setOpenEdit(true);
  //   };

  return (
    <CustomLayout title={"List a Product"}>
      <Box
        width={{ xs: "90%", sm: "70%", md: "70%" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <MaroonButton title="Create a Product" onClick={() => setOpen(true)} />
      </Box>

      <Box mb={5}>
        <CreateProductModal open={open} onClose={() => setOpen(false)} />
      </Box>

      <Grid
        container
        border={"1px solid black"}
        borderRadius={2}
        maxWidth={800}
      >
        <Grid
          container
          padding={2}
          borderBottom={"1px solid gray"}
          textTransform={"uppercase"}
          backgroundColor="#C97878"
          color="white"
          fontWeight={600}
          sx={{
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
        >
          <Grid item xs={1} sm={1} md={1}>
            IMG
          </Grid>
          <Grid item xs={3} md={3}>
            Title
          </Grid>
          <Grid item xs={1} md={1}>
            <Typography display={{ xs: "none", sm: "flex" }}>COST</Typography>
            <Typography display={{ xs: "flex", sm: "none" }}>$</Typography>
          </Grid>
          <Grid item xs={2} md={2}>
            <Typography display={{ xs: "none", sm: "flex" }}>
              Category
            </Typography>
            <Typography display={{ xs: "flex", sm: "none" }}>Categ.</Typography>{" "}
          </Grid>
          <Grid item xs={3} md={3}>
            <Typography display={{ xs: "none", sm: "flex" }}>
              Description
            </Typography>
            <Typography display={{ xs: "flex", sm: "none" }}>Desc.</Typography>{" "}
          </Grid>
          <Grid item xs={2} md={2}>
            Action
          </Grid>
        </Grid>

        {products.map((x) => (
          <>
            <ProductList data={x} />
            <Divider />
          </>
        ))}
      </Grid>
    </CustomLayout>
  );
}

export default CreateProduct;
