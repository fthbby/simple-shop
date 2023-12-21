import React, { useState } from "react";
import { Drawer, Box, Grid, IconButton } from "@mui/material";
import DrawerItems from "./DrawerItems";
import NavItems from "./NavItems";

const drawerWidth = '100%';

const navItems = [
  // { name: "Subscriptions", link: "/subscriptions" },
  { name: "Store", link: "/store" },
  { name: "Work With Me", link: "/work" },
];

function NavBar({fadeIn}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <NavItems
        mobileOpen={mobileOpen}
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
        fadeIn={fadeIn}
      />

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
