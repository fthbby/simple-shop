import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartAtom } from "../../stateManagement/atom/cartAtom";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CartCard from "./components/CartCard";
import RedButton from "../../components/buttons/RedButton";
import TotalCheckout from "./components/TotalCheckout";
import { useNavigate } from "react-router-dom";

function Cart({ fadeIn }) {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartAtom);

  const onRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("recoil-persist", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    // This code will run whenever the cart state changes
    console.log("Cart state has been updated:", cart);
  }, [cart]); // Add cart as a dependency


  console.log('localStorage.getItem("cartAtomState") :', localStorage.getItem("recoil-persist"))
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
                <CartCard
                  data={data}
                  onRemoveFromCart={() => onRemoveFromCart(data.id)}
                />
              </Grid>
              <Divider />
            </>
          ))}

          <TotalCheckout />
        </Box>
      ) : (
        <Box width={"60%"}>
          <Typography pb={3}>
            You have nothing in your shopping cart.
          </Typography>
          <RedButton
            text="Continue Shopping"
            onClick={() => navigate("/store")}
          />
        </Box>
      )}
    </Box>
  );
}

export default Cart;
