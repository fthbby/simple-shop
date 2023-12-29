import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Drawer, Box, Grid, IconButton } from "@mui/material";
import DrawerItems from "./DrawerItems";
import NavItems from "./NavItems";

const drawerWidth = "100%";

const navItems = [
  { name: "Sell", link: "/create" },
  { name: "Store", link: "/store" },
  { name: "Contact", link: "/work" },
    // { name: "Subscriptions", link: "/subscriptions" },

];

function NavBar({}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // useEffect(()=>{

  //   if (fadeIn){
  //     setFadeIn(false)

  //     setTimeout(() => {
  //       setFadeIn(true);
  //     }, 1000);
  //   }
  // },[location])

  const handleDrawerToggle = (link) => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box
        style={{
          transition: "opacity 2s ease-in-out",
          opacity: fadeIn ? 1 : 0,
        }}
      >
        <NavItems
          mobileOpen={mobileOpen}
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
          fadeIn={fadeIn}
        />
      </Box>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerItems
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Drawer>
    </>
  );
}

export default NavBar;
