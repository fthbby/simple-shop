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
import ImageIcon from "@mui/icons-material/Image";

function ProductModal({ open, onClose, data }) {
  const [title, setTitle] = useState(data.title || "");
  const [price, setPrice] = useState(data.price || "");
  const [category, setCategory] = useState(data.category || "");
  const [description, setDescription] = useState(data.description || "");
  const [image, setImage] = useState();

  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64 encoded string
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error :", error);
    };
  };

  const updateProduct = async () => {
    try {
      let datas = {
        id: data._id,
        title,
        price,
        category,
        description,
        image,
      };
      let res = await productAPI.update(datas);

      if (res?.data?.success) {
        onClose();
        window.location.reload();
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
              value={title}
              placeholder={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Price"}
              value={price}
              placeholder={data.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Category"}
              value={category}
              placeholder={data.category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <Typography fontSize={12} fontWeight={600}>
              Image
            </Typography>

            <Typography sx={{ cursor: "pointer" }} component="label">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: 100,
                  width: 100,
                  border: "2px dotted grey",
                  borderRadius: 2,
                  background: "lightgrey",
                  cursor: "pointer",
                }}
              >
                {data?.image ? (
                  <Box
                    component="img"
                    sx={{ width: 100, height: 100 }}
                    src={data?.image}
                  />
                ) : image != null ? (
                  <Box
                    component="img"
                    sx={{ width: 100, height: 100 }}
                    src={image}
                  />
                ) : (
                  <ImageIcon sx={{ width: 40, height: 40 }} />
                )}

                <input
                  type="file"
                  accept="image/"
                  onChange={convertToBase64}
                  hidden
                />
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} pb={2} width={"100%"}>
            <CustomInput
              title={"Description"}
              multiline
              rows={4}
              value={description}
              placeholder={data.description}
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
            <MaroonButton title="Update" onClick={updateProduct} />
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
