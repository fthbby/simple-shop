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
import { useRecoilState } from "recoil";
import { userAtom } from "../../stateManagement/atom/userAtom";
import ImageIcon from "@mui/icons-material/Image";

function CreateProductModal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useRecoilState(userAtom);
  const [image, setImage] = useState();

  const allClose = () => {
    setImage(null);
    onClose();
  };
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

  const uploadImage = (e) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/product`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: image,
        id: user._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        console.log("Before update:", user);
        // setUser({
        //   ...user,
        //   image: data.image,
        //   isAvatarSet: data.isAvatarSet,
        // });

        if (data.success) {
          allClose();
        }
      });
  };

  const createProduct = async () => {
    try {
      let data = {
        userId: user._id,
        title,
        price,
        category,
        description,
        image,
      };
      let res = await productAPI.create(data);
      if (res?.data?.success) {
        onClose();
        window.location.reload();
      }
    } catch (err) {
      console.log("err :", err);
    }
  };

  return (
    <Modal open={open} onClose={allClose}>
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
              Add a Product To Sell
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={allClose}>
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Price"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>

          <Grid item xs={5.75} pb={2}>
            <CustomInput
              title={"Category"}
              value={category}
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
                {image ? (
                  <Box
                    component="img"
                    sx={{ width: 100, height: 100 }}
                    src={image}
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
            
              </Box>

              <input
                type="file"
                accept="image/"
                onChange={convertToBase64}
                hidden
              />
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} pb={2} width={"100%"}>
            <CustomInput
              title={"Description"}
              value={description}
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
            <WhiteButton title="Save Draft" />
            <MaroonButton title="Submit" onClick={createProduct} />
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
}

export default CreateProductModal;

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
