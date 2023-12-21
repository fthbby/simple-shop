import React from "react";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../stateManagement/atom/cartAtom";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartCard from "./components/CartCard";
import Checkout from "../../components/buttons/Checkout";
import TotalCheckout from "./components/TotalCheckout";

function Cart({ fadeIn }) {
  const [cart, setCart] = useRecoilState(cartAtom);

  console.log("cart :", cart);
  return (
    <Box
      pt={"10%"}
      sx={{ transition: "opacity .3s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      <Typography variant="h5" color="#B3B3B3" pb={3}>
        SHOPPING CART
      </Typography>

      {cart.length > 0 ? (
        <Box>
          {cart?.map((data) => (
            <>
              <Grid container display="flex" paddingY={3}>
                <CartCard data={data} />
              </Grid>
              <Divider />
            </>
          ))}

          <TotalCheckout/>
        </Box>
      ) : (
        "NO THIGN IN CART"
      )}


    </Box>
  );
}

export default Cart;
