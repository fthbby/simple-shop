import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import AddToCart from "../../components/buttons/AddToCart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function ProductDetails({ fadeIn }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const grabProduct = async () => {
    try {
      setIsLoading(true);
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await res.json();
      console.log("data :", data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
      pt={"10%"}
      sx={{ transition: "opacity .5s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      {isLoading ? (
        <Box
          display="flex"
          height={'100%'}
          alignItems={"center"}
          justifyContent={"center"}
          pt={'20%'}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            width={"100%"}
            justifyContent={"space-between"}
            pb={5}
          >
            <Box display="flex" flexDirection={"row"} alignItems={"center"}>
              <Box
                sx={{
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  pr={1}
                  fontSize={12}
                  letterSpacing={1}
                  textTransform={"uppercase"}
                  onClick={() => navigate("/store")}
                  sx={{ cursor: "pointer" }}
                >
                  Store
                </Typography>
                <KeyboardArrowRightIcon sx={{ fontSize: 14 }} />
              </Box>

              <Typography
                pl={1}
                fontSize={12}
                letterSpacing={1}
                textTransform={"uppercase"}
              >
                {data.title}
              </Typography>
            </Box>

            <Box
              sx={{
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                pl={1}
                fontSize={12}
                letterSpacing={1}
                textTransform={"uppercase"}
                onClick={onNext}
                sx={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                Next
              </Typography>
              <KeyboardArrowRightIcon sx={{ fontSize: 14 }} />
            </Box>
          </Box>

          <Grid container>
            <Grid
              item
              md={6}
              order={{ xs: 2, md: 1 }}
              pr={{ xs: 0, md: 5 }}
              sx={{
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" pb={3}>
                {data.title}
              </Typography>
              <Typography pb={3} fontFamily={"Sometype Mono"}>
                ${data.price}
              </Typography>
              <Typography pb={3} fontSize={12} fontFamily={"Sometype Mono"}>
                {data.description}
              </Typography>

              <AddToCart productId={id} product={data} />
            </Grid>

            <Grid item md={2} order={{ md: 1 }} />
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              order={{ xs: 1, md: 2 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pb:5
              }}
            >
              <img src={data.image} width={"90%"} height={'450px'} />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}

export default ProductDetails;
