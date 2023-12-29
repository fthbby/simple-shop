import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

function CustomLayout(props) {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      pt={"10%"}
      flexDirection={"column"}
      sx={{ transition: "opacity .3s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      <Box width={{ xs: "90%", sm: "70%", md: "70%" }}>
        <Typography
          color="#C97878"
          fontWeight={600}
          fontSize={12}
          letterSpacing={1}
          textAlign={"center"}
          pb={3}
          textTransform={"uppercase"}
        >
          {props.title}
        </Typography>
      </Box>
      {props.children}
    </Box>
  );
}

export default CustomLayout;
