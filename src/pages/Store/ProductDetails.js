import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import AddToCart from "../../components/buttons/AddToCart";

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

  const onNext = () => {
    navigate(`/product/${Number(id) + 1}`);
  };
  useEffect(() => {
    grabProduct();
  }, [id]);

  return (
    <Box
      pt={"15%"}
      sx={{ transition: "opacity .5s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      <Box
        display="flex"
        width={"100%"}
        justifyContent={"space-between"}
        pb={5}
      >
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
          onClick={onNext}
          sx={{ cursor: "pointer" }}
        >
          Next >
        </Typography>
      </Box>

      <Grid container>
        <Grid item md={6} order={{ xs: 2, md: 1 }} pr={{ xs: 0, md: 5 }}>
          <Typography variant="h5" pb={3}>
            {data.title}
          </Typography>
          <Typography pb={3}>${data.price}</Typography>
          <Typography pb={3} fontSize={12}>
            {data.description}
          </Typography>

          <AddToCart />
        </Grid>

        <Grid item md={6} order={{ xs: 1, md: 2 }}>
          <img src={data.image} width={"100%"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetails;
