import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ fadeIn }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const grabProduct = async () => {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await res.json();
      console.log("data :", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  };

  useEffect(() => {
    grabProduct();
  }, [id]);

  return (
    <Box
      pt={"15%"}
      sx={{ transition: "opacity .5s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      <Box display="flex" width={"100%"} justifyContent={"space-between"}>
        <Box display="flex" flexDirection={"row"} alignItems={"center"}>
          <Typography
            pr={1}
            fontSize={12}
            letterSpacing={1}
            textTransform={"uppercase"}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/store")}
          >
            Store
          </Typography>
          >
          <Typography
            pl={1}
            fontSize={12}
            letterSpacing={1}
            textTransform={"uppercase"}
          >
            {data.title}
          </Typography>
        </Box>

        <Typography
          pl={1}
          fontSize={12}
          letterSpacing={1}
          textTransform={"uppercase"}
        >
          Next
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductDetails;
