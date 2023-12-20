import React from "react";
import { Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <Box>
        <Grid container fontSize={12}>
          <Grid item xs={2} sm={2} md={2}>
            LOGO
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
            md={10}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box color="#F28F59" textTransform={"uppercase"} fontWeight={700}>
              <Link
                to="/subscriptions"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Subscriptions
              </Link>
            </Box>
            <Box color="#F28F59" textTransform={"uppercase"} fontWeight={700}>
              Store
            </Box>
            <Box color="#F28F59" textTransform={"uppercase"} fontWeight={700}>
              Work with me
            </Box>
            <Box color="#F28F59" textTransform={"uppercase"} fontWeight={700}>
              Icon
            </Box>
            <Box color="#F28F59" textTransform={"uppercase"} fontWeight={700}>
              Cart
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default index;
