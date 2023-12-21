import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Box,
} from "@mui/material/";
import { useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function DrawerItems({ navItems, handleDrawerToggle }) {
  const location = useLocation();
  let currentPage = location.pathname;

  return (
    <Box backgroundColor="black" height={"100%"} pt={'2%'} pr={'2%'}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 1, pt: 1 }}>
        <IconButton>
          <CloseIcon style={{ color: "white" , fontSize:30}} onClick={handleDrawerToggle} />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item, index) => (
          <>
            <ListItem key={item} disablePadding>
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
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
}

export default DrawerItems;
