import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../stateManagement/atom/cartAtom";

function AddToCart({ productId, product }) {
  const [cart, setCart] = useRecoilState(cartAtom);

  const addTodoItem = () => {
    if (productId) {
      setCart((oldCart) => [
        ...oldCart,
        {
          id: productId,
          title: product.title,
          price: product.price,
          image: product.image
        },
      ]);
      //   setInputValue("");
    }
  };

  console.log("cart :", cart);
  return (
    <Box
      onClick={addTodoItem}
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
        cursor: "pointer",
        transition: "color 0.3s ease-in-out, background 0.3s ease-in-out",
        "&:hover": {
          color: "black",
          background: "red",
        },
      }}
    >
      Add To Cart
    </Box>
  );
}

export default AddToCart;
