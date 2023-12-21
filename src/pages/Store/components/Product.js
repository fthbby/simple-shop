import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Product({ data }) {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      width={250}
      onClick={() => navigate(`/product/${data.id}`)}
    >
      <Box
        component={"img"}
        src={data.image}
        width={250}
        height={250}
        // border={"1px solid black"}
        sx={{
          cursor: "pointer",
          transition: "filter 0.3s ease-in-out",
          "&:hover": {
            filter: "brightness(120%)", // Adjust the brightness value as needed
          },
        }}
      />

      <Typography fontSize={12} textTransform={"uppercase"} fontWeight={600}>
        {data.title.substring(0, 20)}
      </Typography>
      <Typography fontSize={12}>${data.price}</Typography>
    </Box>
  );
}

export default Product;
