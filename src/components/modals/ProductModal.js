import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomInput from "../input/CustomInput";
import MaroonButton from "../buttons/MaroonButton";
import WhiteButton from "../buttons/WhiteButton";
import * as productAPI from "../../api/routes/product";

function ProductModal({ open, onClose, data }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const createProduct = async () => {
    try {
      let data = {
        title,
        price,
        category,
        description,
      };
      let res = await productAPI.create(data);
      console.log("data :", res.data);
      if (res?.data?.success) {
        onClose();
      }
    } catch (err) {
      console.log("err :", err);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box style={styles.modal}>
        <Grid container padding={1}>
          <Grid item xs={1} />
          <Grid
            item
            xs={10}
            display={"flex"}
            justifyContent={"center"}
            padding={1}
          >
            <Typography fontWeight={600} textTransform={"uppercase"}>
              EDIT PRODUCT
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <Grid
          container
          padding={3}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Title"}
              value={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Price"}
              value={data.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Category"}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={12} pb={2} width={"100%"}>
            <CustomInput
              title={"Description"}
              multiline
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Box
            mt={2}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <WhiteButton title="Save As Draft" />
            <MaroonButton title="Update" onClick={createProduct} />
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ProductModal;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid #000",
    borderRadius: 10,

    width: 450,
  },
};
