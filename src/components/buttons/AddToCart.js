import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Grid, Typography } from "@mui/material";
import { cartAtom } from "../../stateManagement/atom/cartAtom";

function AddToCart({ productId, product }) {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [text, setText] = useState("Add To Cart");
  const addTodoItem = () => {
    if (productId) {
      setCart((oldCart) => [
        ...oldCart,
        {
          id: productId,
          title: product.title,
          price: product.price,
          image: product.image,
        },
      ]);
    }
  };

  const onNext = async () => {
    setText("Adding...");
    // Wait for 2 seconds before setting the next text
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addTodoItem()
    setText("Added!");

    // Wait for another 2 seconds before setting the final text
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setText("Add To Cart");
  };

  return (
    <Box
      onClick={onNext}
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
