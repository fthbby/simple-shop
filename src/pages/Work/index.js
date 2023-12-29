import React, { useState, useEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import CustomLayout from "../../layouts/CustomLayout";

function Work({}) {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <CustomLayout title={"Reprehenderit do sunt labore esse ad."}>
      <Grid container display="flex" justifyContent={"space-between"} mb={5}>
        <Grid item xs={12} sm={3.5} md={3.5} pb={5}>
          <img src="https://picsum.photos/200" width={"100%"} />

          <Typography
            fontSize={12}
            color="#C97878"
            py={3}
            textTransform={"uppercase"}
          >
            Culpa consectetur incididunt.
          </Typography>
          <Typography fontSize={12} fontFamily={"Sometype Mono"}>
            Eu nostrud ipsum duis dolor fugiat non ut Lorem sit anim aliqua
            tempor consectetur cillum. Magna ea laboris labore id qui aliquip
            cillum proident officia proident esse commodo mollit irure. Id velit
            incididunt cillum cillum culpa in nostrud aliqua voluptate irure id
            nulla. Proident sunt nisi duis sint ea.Fugiat quis dolore ex est
            esse. Labore nostrud cupidatat pariatur mollit. Consequat aute sit
            deserunt culpa commodo est. Nulla commodo ipsum ea dolore et
            excepteur laborum qui.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3.5} md={3.5} pb={5}>
          <img src="https://picsum.photos/200" width={"100%"} />
          <Typography
            fontSize={12}
            color="#C97878"
            py={3}
            textTransform={"uppercase"}
          >
            Culpa consectetur incididunt.
          </Typography>
          <Typography fontSize={12} fontFamily={"Sometype Mono"}>
            Eu nostrud ipsum duis dolor fugiat non ut Lorem sit anim aliqua
            tempor consectetur cillum. Magna ea laboris labore id qui aliquip
            cillum proident officia proident esse commodo mollit irure. Id velit
            incididunt cillum cillum culpa in nostrud aliqua voluptate irure id
            nulla. Proident sunt nisi duis sint ea.Fugiat quis dolore ex est
            esse. Labore nostrud cupidatat pariatur mollit. Consequat aute sit
            deserunt culpa commodo est. Nulla commodo ipsum ea dolore et
            excepteur laborum qui.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3.5} md={3.5}>
          <img src="https://picsum.photos/200" width={"100%"} />
          <Typography
            fontSize={12}
            color="#C97878"
            py={3}
            textTransform={"uppercase"}
          >
            Cillum aute occaecat elit.
          </Typography>
          <Typography fontSize={12} fontFamily={"Sometype Mono"}>
            Eu nostrud ipsum duis dolor fugiat non ut Lorem sit anim aliqua
            tempor consectetur cillum. Magna ea laboris labore id qui aliquip
            cillum proident officia proident esse commodo mollit irure. Id velit
            incididunt cillum cillum culpa in nostrud aliqua voluptate irure id
            nulla. Proident sunt nisi duis sint ea.Fugiat quis dolore ex est
            esse. Labore nostrud cupidatat pariatur mollit. Consequat aute sit
            deserunt culpa commodo est. Nulla commodo ipsum ea dolore et
            excepteur laborum qui.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        py={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
      >
        <Typography
          fontSize={12}
          color="#C97878"
          fontWeight={600}
          pb={5}
          letterSpacing={2}
        >
          LET'S GET SOMETHING WORKING.
        </Typography>

        <ContactForm />
      </Grid>
    </CustomLayout>
  );
}

export default Work;
