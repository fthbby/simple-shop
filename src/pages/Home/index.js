import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Explore from "../../images/explore.png";

function Home() {
  return (
    <Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        height={"95vh"}
        color="#C97878"
        fontWeight={700}
        fontSize={14}
        // backgroundColor="red"
      >
        WELCOME TO THIS SITE
      </Box>

      <Grid container height={"65vh"}>
        <Grid item sm={6} md={6}>
          <img src="https://picsum.photos/300" />
        </Grid>
        <Grid item sm={6} md={6} pt={"10%"}>
          <Box color="#C97878" fontSize={30} textAlign={"center"}>
            I'm Cartman
          </Box>
          <Box textAlign={"center"}>
            Cillum duis aliquip cupidatat veniam incididunt Lorem. Incididunt
            nisi consectetur nostrud reprehenderit adipisicing anim minim. Duis
            sint et tempor velit qui dolor elit ad. Ex excepteur ut nisi laboris
            amet elit deserunt est incididunt ex ipsum cupidatat et. Aliqua anim
            labore sunt elit in cupidatat occaecat commodo. Exercitation
            consequat irure dolore ex laborum incididunt anim sit elit pariatur
            enim. Nostrud fugiat reprehenderit cupidatat cillum sit. Fugiat
            commodo reprehenderit ipsum minim consequat nulla aliquip laborum eu
            voluptate. Ullamco aute incididunt duis pariatur id occaecat est est
            qui sit.
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          sm={12}
          md={12}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          paddingY={5}
        >
          <img
            src={Explore}
            style={{ maxWidth: 700, width: 500, height: "auto" }}
          />
        </Grid>
      </Grid>

      <Grid container paddingY={5}>
        <Grid
          item
          sm={6}
          md={6}
          color="#C97878"
          // display="flex"
          // alignItems={"center"}
          // justifyContent={"center"}
        >
          WANNA SEE THE OC?
          <br />
          Become a subscriber
        </Grid>

        <Grid
          item
          sm={6}
          md={6}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          Reprehenderit officia eu quis ad sunt in nisi et. Cupidatat ex ut
          nostrud tempor cupidatat ad dolore reprehenderit aliqua quis nulla
          laboris. Amet laborum in velit ea reprehenderit aute culpa magna.
          Laboris cupidatat aliqua elit esse Lorem dolore reprehenderit.
        </Grid>
      </Grid>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={10}
        flexDirection={"column"}
      >
        <Typography>looking for more?</Typography>

        <Typography>YOUR GUIDE TO THE WORLD</Typography>
      </Box>

      <Divider />

      <Grid container paddingY={10} width={"100%"}>
        <Grid item sm={6} md={6}>
          Amet occaecat aliqua voluptate deserunt. Ipsum enim proident deserunt
          esse mollit minim officia esse deserunt magna nisi. Occaecat sunt esse
          minim pariatur est est Lorem ad quis irure. Et velit exercitation
          reprehenderit et excepteur velit culpa laboris fugiat labore Lorem
          irure. Quis nostrud cupidatat adipisicing elit consectetur pariatur
          ullamco ea laboris duis minim.{" "}
        </Grid>
        <Grid item sm={6} md={6}>
          <img src="https://picsum.photos/300" />
        </Grid>
      </Grid>

      <Divider />

      <Grid container paddingY={10}>
        <Grid item sm={6} md={3}>
          <img src="https://picsum.photos/200/300" />
        </Grid>
        <Grid item sm={6} md={3}>
          <img src="https://picsum.photos/200/300" />
        </Grid>
        <Grid item sm={6} md={3}>
          <img src="https://picsum.photos/200/300" />
        </Grid>
        <Grid item sm={6} md={3}>
          <img src="https://picsum.photos/200/300" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
