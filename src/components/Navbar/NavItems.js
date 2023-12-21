import React, { useState, useEffect } from "react";
import { Badge, Button, Box, Grid } from "@mui/material/";
import { NavLink, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useRecoilState } from "recoil";
import { cartAtom } from "../../stateManagement/atom/cartAtom";
import MenuIcon from "@mui/icons-material/Menu";

function NavItems({ mobileOpen, navItems, handleDrawerToggle, fadeIn }) {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartAtom);
  const [totalQuantity, setTotalQuantity] = useState('')
  
  const total = ()=>{
    let totalAmount = 0

    cart.forEach((item) => {
      totalAmount += item.quantity
    });

    setTotalQuantity(totalAmount)
  }

  useEffect(()=>{
    total()
  },[])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", md: "space-between" },
        transition: "opacity 1.8s ease-in-out",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer", fontFamily: "Tangerine", fontSize: 25 }}
      >
        Avofeed
      </Box>
      {mobileOpen ? null : (
        <Box sx={{ pt: 1, pb: 1 }}>{/* <MiniLogo /> */}</Box>
      )}
      <Grid item xs={4}>
        {!mobileOpen ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ mr: 0, display: { xs: "block", sm: "none" } }}
          >
            <Box>
              <Badge
                badgeContent={totalQuantity}
                color="error"
                display={cart.length > 0 ? "flex" : "none"}
                sx={{ position: "absolute" }}
              >
                <ShoppingCartOutlinedIcon
                  onClick={() => navigate("/cart")}
                  sx={{ fontSize: 30, cursor: "pointer" }}
                />
              </Badge>
            </Box>

            <MenuIcon
              sx={{ fontSize: 35, cursor: "pointer", paddingLeft: 6 }}
              onClick={handleDrawerToggle}
            />
          </Box>
        ) : null}
      </Grid>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button
            component={NavLink}
            to={item.link}
            disableRipple
            sx={{
              letterSpacing: 3,
              fontWeight: 700,
              color: "#F28F59",
              fontSize: "12px",
              padding: "0 20px",
              "&.active": {
                color: "#F28F59",
              },
              "&:hover": {
                color: "black",
              },
            }}
          >
            {item.name}
          </Button>
        ))}

        <Button
          component={NavLink}
          disableRipple
          to={"cart"}
          sx={{
            letterSpacing: 3,
            fontWeight: 700,
            color: "#F28F59",
            fontSize: "12px",
            padding: "0 20px",
            "&.active": {
              color: "#F28F59",
            },
            "&:hover": {
              color: "black",
            },
          }}
        >
          CART {cart.length > 0 ? `(${totalQuantity})` : ""}
        </Button>
      </Box>
    </Box>
  );
}

export default NavItems;
