import React from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
import RedButton from "./buttons/RedButton";

function ContactForm() {
  return (
    <Grid container>
      <Grid item xs={5.75} sm={5.75} md={5.75} mb={2}>
        <TextField label="First Name" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={0.5} sm={0.5} />
      <Grid item xs={5.75} sm={5.75} md={5.75}>
        <TextField label="Last Name" variant="filled" fullWidth />
      </Grid>

      <Grid item xs={12} sm={12} md={12} mb={2}>
        <TextField label="Email" variant="filled" fullWidth />
      </Grid>

      <Grid item xs={12} sm={12} md={12} mb={2}>
        <TextField label="Subject" variant="filled" fullWidth />
      </Grid>

      <Grid item xs={12} sm={12} md={12} mb={2}>
        <TextField
          label="Message"
          variant="filled"
          fullWidth
          multiline
          rows={5}
        />
      </Grid>

      <Grid item xs={12} sm={3} md={3} display="flex" alignItems={'center'} justifyContent={'center'}>
        <RedButton text="Submit" width={"100%"} />
      </Grid>
    </Grid>
  );
}

export default ContactForm;
