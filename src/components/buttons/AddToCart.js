import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Grid, Typography } from "@mui/material";
import { cartAtom } from "../../stateManagement/atom/cartAtom";

function AddToCart({ productId, product }) {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [text, setText] = useState("Add To Cart");
  const [disabled, setDisabled] = useState(false)

  const addToCart = () => {
    setCart((oldCart) => {
      // Check if the product with the same ID already exists in the cart
      const existingItemIndex = oldCart.findIndex(
        (item) => item.id === productId
      );

      if (existingItemIndex !== -1) {
        // If the product exists, update the quantity
        const updatedCart = [...oldCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };

        return updatedCart;
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        return [
          ...oldCart,
          {
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const onNext = async () => {
    setDisabled(true)
    setText("Adding...");
    // Wait for 2 seconds before setting the next text
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addToCart();
    setText("Added!");

    // Wait for another 2 seconds before setting the final text
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setText("Add To Cart");
    setDisabled(false)
  };

  return (
    <Box
      onClick={!disabled ? onNext : null}
      border={"2px solid red"}
      padding={2.5}
      textTransform={"uppercase"}
      color="red"
      width={125}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={14}
      fontFamily={"Sometype Mono"}
      sx={{
        cursor: "pointer",
        transition: "color 0.3s ease-in-out, background 0.3s ease-in-out",
        "&:hover": {
          color: "black",
          background: "red",
        },
      }}
    >
      {text}
    </Box>
  );
}

export default AddToCart;
