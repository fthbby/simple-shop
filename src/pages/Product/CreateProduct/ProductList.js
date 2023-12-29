import React, { useState } from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import MaroonButton from "../../../components/buttons/MaroonButton";
import ProductModal from "../../../components/modals/ProductModal";
import DeleteButton from "../../../components/buttons/DeleteButton";

function ProductList({ data }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);


  return (
    <Grid container padding={2} paddingY={2} display="flex" alignItems="center">
      <Grid item xs={1} md={1}>
        <Avatar sx={{ borderRadius: 1 }} />
      </Grid>
      <Grid item xs={2} md={2}>
        <Box>{data.title}</Box>
      </Grid>
      <Grid item xs={2} md={2}>
        <Box>$11</Box>
      </Grid>
      <Grid item xs={2} md={2}>
        <Box>CATEGORY</Box>
      </Grid>
      <Grid item xs={3} md={3}>
        <Box>DESCRIPTION</Box>
      </Grid>
      <Grid item xs={2} md={2} display="flex" justifyContent={"space-between"}>
        <MaroonButton title="edit" onClick={() => setOpenEdit(true)} />
        <DeleteButton onClick={()=>setOpenDelete(true)}/>
      </Grid>

      <ProductModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        data={data}
      />
    </Grid>
  );
}

export default ProductList;
