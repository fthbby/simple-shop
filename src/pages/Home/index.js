import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Explore from "../../images/explore.png";
import Avocado from "../../images/avocado.png";

function Home({ fadeIn }) {
  return (
    <Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        height={"95vh"}
        color="#C97878"
        fontWeight={700}
        fontSize={12}
        letterSpacing={2}
        flexDirection={"column"}
        sx={{ transition: "opacity .3s ease-in-out", opacity: fadeIn ? 1 : 0 }}
      >
        <img
          src={Avocado}
          style={{
            maxWidth: 500,
            width: 200,
            height: "auto",
            marginBottom: 30,
          }}
        />
        WELCOME TO THIS SITE.
      </Box>

      <Grid container mb={10}>
        <Grid item  xs={12} sm={6} md={5.5}>
          <img src="https://picsum.photos/300" width={"100%"} />
        </Grid>
        <Grid item md={1}/>
        <Grid item sm={6} md={5.5} pt={"10%"}>
          <Box color="#C97878" fontSize={30} textAlign={"center"}>
            I'm Cartman
          </Box>
          <Box textAlign={"center"} fontFamily={"Sometype Mono"} fontSize={12}>
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
          // paddingY={2}
        >
          {/* <img
            src={Explore}
            style={{ maxWidth: 700, width: 500, height: "auto" }}
          /> */}
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
          fontFamily={"Sometype Mono"}
          fontSize={12}
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

      <Grid container paddingY={10}>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          fontFamily={"Sometype Mono"}
          fontSize={12}
        >
          Amet occaecat aliqua voluptate deserunt. Ipsum enim proident deserunt
          esse mollit minim officia esse deserunt magna nisi. Occaecat sunt esse
          minim pariatur est est Lorem ad quis irure. Et velit exercitation
          reprehenderit et excepteur velit culpa laboris fugiat labore Lorem
          irure. Quis nostrud cupidatat adipisicing elit consectetur pariatur
          ullamco ea laboris duis minim.{" "}
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <img src="https://picsum.photos/300" />
        </Grid>
      </Grid>

      <Divider />

      <Grid
        container
        paddingY={10}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid
          item
          sm={6}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src="https://picsum.photos/200/300" />
        </Grid>
        <Grid
          item
          sm={6}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src="https://picsum.photos/200/300" />
        </Grid>
        <Grid
          item
          sm={6}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src="https://picsum.photos/200/300" />
        </Grid>
        <Grid
          item
          sm={6}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src="https://picsum.photos/200/300" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
