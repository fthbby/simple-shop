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
import * as userAPI from "../../api/routes/user";

function EditProfileModal({ open, onClose }) {
  const [user, setUser] = useRecoilState(userAtom);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [profile, setProfile] = useState(user);
  
  
  const allClose = () => {
    setImage(null);
    onClose();
  };

  const onSave = async () => {
    try {
      let id = user._id;
      let data = {
        // id,
        firstName,
        lastName,
        email,
      };
      console.log("data :", data);

      let res = await userAPI.updateUser(id, data);
      console.log("res :", res.data);
      if (res?.data?.success) {
        setUser({
          ...user,
          ...data,
        });
        onClose();
        window.location.reload();
      }
    } catch (err) {
      console.log("err :", err);
    }
  };

  console.log('user ', user)

  return (
    <Modal open={open} onClose={allClose}>
      <Box style={styles.modal}>
        <Grid container padding={1}>
          <Grid item xs={2} />
          <Grid
            item
            xs={8}
            display={"flex"}
            justifyContent={"center"}
            padding={1}
          >
            <Typography fontWeight={600} textTransform={"uppercase"}>
              EDIT PROFILE
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent={"flex-end"}>
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
          <Grid item xs={12} pb={2}>
            <CustomInput
              title={"First Name"}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} pb={2}>
            <CustomInput
              title={"Last Name"}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} pb={2}>
            <CustomInput
              title={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Box
            mt={2}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <WhiteButton title="Cancel" onClick={onClose} />
            <MaroonButton title="Save" onClick={onSave} />
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
}

export default EditProfileModal;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid #000",
    borderRadius: 10,

    width: 350,
  },
};
