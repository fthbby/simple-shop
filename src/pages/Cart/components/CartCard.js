import React, { useState } from "react";
import { Box, Select, MenuItem, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../../stateManagement/atom/cartAtom";

function CartCard({ data, onRemoveFromCart }) {
  const [cart, setCart] = useRecoilState(cartAtom);

  const [selectedQuantity, setSelectedQuantity] = useState(data.quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setSelectedQuantity(newQuantity);
    updateCart(data.id, data, newQuantity);
  };

  const updateCart = (productId, product, quantity) => {
    setCart((oldCart) => {
      const existingItemIndex = oldCart.findIndex(
        (item) => item.id === productId
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...oldCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: quantity,
        };

        return updatedCart;
      } else {
        return [
          ...oldCart,
          {
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity,
          },
        ];
      }
    });
  };

  return (
    <>
      <Grid item xs={5} sm={2} md={2}>
        <img src={data.image} height={150} width={150} />
      </Grid>
      <Grid item xs={0} sm={1} md={1} />
      <Grid
        item
        xs={4.5}
        sm={5.5}
        md={5.5}
        fontFamily={"Sometype Mono"}
        fontSize={14}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        {data.title}

        <Box>
          QTY:{" "}
          <Select
            value={selectedQuantity}
            onChange={handleQuantityChange}
            sx={{ width: 65, height:30 }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        sm={3}
        md={3}
        display={{ xs: "none", sm: "none", md: "flex" }}
        justifyContent={"flex-end"}
      >
        <Typography fontFamily={"Sometype Mono"} pr={1}>
          ${data.price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2.5}
        sm={3.5}
        md={3}
        display={{ xs: "flex", sm: "flex", md: "none" }}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
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
        <Typography fontFamily={"Sometype Mono"} pr={1}>
          ${data.price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid
        item
        xs={0.5}
        sm={3}
        md={0.5}
        display={{ xs: "none", small: "none", md: "flex" }}
        justifyContent={"flex-end"}
        alignItems={"space-between"}
      >
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
