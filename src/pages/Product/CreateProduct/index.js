import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomLayout from "../../../layouts/CustomLayout";
import CreateProductModal from "../../../components/modals/CreateProductModal";
import MaroonButton from "../../../components/buttons/MaroonButton";

function CreateProduct() {
  const [open, setOpen] = useState(false);
  return (
    <CustomLayout title={"List a Product"}>
      <Box
        width={{ xs: "90%", sm: "70%", md: "70%" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <MaroonButton title="Create a Product" onClick={() => setOpen(true)} />
      </Box>

      <CreateProductModal open={open} onClose={() => setOpen(false)} />
    </CustomLayout>
  );
}

export default CreateProduct;
