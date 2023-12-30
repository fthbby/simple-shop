import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import AddToCart from "../../components/buttons/AddToCart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import * as productAPI from "../../api/routes/product";

function ProductDetails({}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const onSeller = () => {
    navigate(`/profile/${data?.user._id}`);
  };

  const onNext = () => {
    // navigate(`/product/${Number(id) + 1}`);
    console.log('next placeholder')
  };

  const getProduct = async () => {
    try {
      setIsLoading(true);
      let res = await productAPI.getById(id);
      if (res.data.success) {
        setIsLoading(false);
        setData(res.data.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Box
      pt={"10%"}
      sx={{ transition: "opacity .5s ease-in-out", opacity: fadeIn ? 1 : 0 }}
    >
      {isLoading ? (
        <Box
          display="flex"
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={"20%"}
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
              order={{ xs: 2, sm: 1, md: 1 }}
              pr={{ xs: 0, md: 5 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" pb={3}>
                {data.title}
              </Typography>
              <Typography
                variant="h7"
                gutterBottom
                onClick={onSeller}
                sx={{ cursor: "pointer", color: "blue" }}
              >
                seller: {data?.user?.firstName}
              </Typography>
              <Typography pb={3} fontFamily={"Sometype Mono"}>
                ${data.price}
              </Typography>
              <Typography pb={3} fontSize={12} fontFamily={"Sometype Mono"}>
                {data.description}
              </Typography>

              <AddToCart productId={id} product={data} />
            </Grid>

            <Grid item sm={2} md={1} order={{ xs: 1 }} />
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              order={{ xs: 1 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pb: 5,
              }}
            >
              <img
                src={data.image ? data.image : "https://picsum.photos/200/300"}
                width={"90%"}
                height={"450px"}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}

export default ProductDetails;
