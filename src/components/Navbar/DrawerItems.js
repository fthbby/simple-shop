import { useState, useEffect } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Divider,
  Box,
} from "@mui/material/";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function DrawerItems({ navItems, handleDrawerToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  let currentPage = location.pathname;

  return (
    <Box backgroundColor="black" height={"100%"}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 1, pt: 1 }}>
        <IconButton>
          <CloseIcon style={{color:'white'}} onClick={handleDrawerToggle} />
        </IconButton>
      </Box>

      <Box
        sx={{ textAlign: "center", cursor: "pointer" }}
        onClick={() => navigate("/")}
      ></Box>

      <List>
        {navItems.map((item, index) => (
          <>
            {/* <ListItem key={item} disablePadding> */}
            <ListItemButton
              sx={{
                pt: 2,
                pb: 2,
              }}
              href={item.link}
              disableRipple
            >
              <Typography
                pl={2}
                fontFamily="Oswald"
                variant="h5"
                textTransform={"uppercase"}
                color={currentPage === item.link ? "lightblue" : "white"}
                fontWeight={currentPage === item.link && 600}
              >
                {item.name}
              </Typography>
            </ListItemButton>
            {/* </ListItem> */}
            {/* <Divider /> */}
          </>
        ))}
      </List>
    </Box>
  );
}

export default DrawerItems;
