import React, { useEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Product({ data }) {
  const navigate = useNavigate();


  return (
    <Box
      display="flex"
      flexDirection={"column"}
      width={250}
      onClick={() => navigate(`/product/${data?._id}`)}
      sx={{
        cursor: "pointer",

        transition: "color 0.3s ease-in-out",
        "&:hover": {
          color: "#C97878", // Adjust the brightness value as needed
        },
      }}
    >
      <Box
        component={"img"}
        src={data?.image ? data.image : "https://picsum.photos/200/300"}
        width={250}
        height={250}
      />

      <Typography fontSize={12} textTransform={"uppercase"} fontWeight={600}>
        {data.title.substring(0, 20)}
      </Typography>
      <Typography fontSize={12}>${data.price}</Typography>
    </Box>
  );
}

export default Product;
