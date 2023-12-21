import React, { useState } from "react";
import { Drawer, Box, Grid,   IconButton,} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerItems from "./DrawerItems";
import NavItems from "./NavItems";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 310;

const navItems = [
  { name: "Subscriptions", link: "/subscriptions" },
  { name: "Store", link: "/store" },
  { name: "Work With Me", link: "/work" },
  { name: "Cart", link: "/cart" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box>
      {/* <Grid
        item
        sm={12}
        md={12}
        backgroundColor="red"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
                sx={{ display: { xs: "none", sm: "flex" } }}

      > */}
        <NavItems
          mobileOpen={mobileOpen}
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
        />

        {/* <Box>Logo</Box>

        <Box display="flex">
          {navItems.map((item) => (
            <Box>{item.name}</Box>
          ))}
        </Box> */}
        
      {/* </Grid> */}

    

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
    </Box>
  );
}

export default NavBar;
