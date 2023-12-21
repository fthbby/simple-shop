import React from "react";
import { IconButton, Toolbar, Button, Box, Grid } from "@mui/material/";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function NavItems({ mobileOpen, navItems, handleDrawerToggle }) {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", md: "space-between" },
      }}
    >
    <Box>
        LOGO
    </Box>
      {mobileOpen ? null : (
        <Box sx={{ pt: 1, pb: 1 }}>{/* <MiniLogo /> */}</Box>
      )}
      <Grid item xs={4}>
        {!mobileOpen ? (
          <IconButton
            edge="start"
            disableRipple
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon disableRipple />
          </IconButton>
        ) : null}
      </Grid>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button
            component={NavLink}
            to={item.link}
            disableRipple
            sx={{
            fontWeight:700,
              color: "#F28F59",
              fontSize: "16px",
              padding: "0 20px",
              "&.active": {
                color: "black",
                fontWeight: "bold",
              },
              "&:hover": {
                color: "black",
                fontWeight: "bold",
              },
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
}

export default NavItems;
