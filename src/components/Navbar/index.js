import React from "react";
import { Button, Box, Grid } from "@mui/material";

function index() {
  return (
    <>
      <Box paddingY={8} paddingX={5}>
        <Grid container>
          <Grid item sm={2} md={2}>
            LOGO
          </Grid>
          <Grid
            item
            sm={10}
            md={10}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box color="#F28F59" textTransform={"uppercase"} fontWeight={700}>
              Subscriptions
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
