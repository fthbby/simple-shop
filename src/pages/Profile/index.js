import React, { useEffect, useState } from "react";
import { Avatar, Box, Grid, Typography, Badge } from "@mui/material";

import AuthLayout from "../../layouts/AuthLayout";
import CustomLayout from "../../layouts/CustomLayout";

import { useRecoilState } from "recoil";
import { userAtom } from "../../stateManagement/atom/userAtom";
import { useParams } from "react-router-dom";
import * as userAPI from "../../api/routes/user";
import MailIcon from "@mui/icons-material/Mail";
import { Camera, CameraAltOutlined } from "@mui/icons-material";
import PhotoModal from "../../components/modals/PhotoModal";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useRecoilState(userAtom);
  const [profile, setProfile] = useState("");
  const [self, setSelf] = useState(false);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (id == user._id) {
      setSelf(true);
    }
  }, [id, user]);
  const getUser = async () => {
    try {
      let res = await userAPI.getUserById(id);

      if (res.data.success) {
        setProfile(res.data.data);
      }
    } catch (err) {}
  };

  const getAllUsers = async () => {
    try {
      let res = await userAPI.getAll();
      console.log("res :", res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getUser();
    // getAllUsers();
  }, [id]);

  return (
    <AuthLayout>
      <PhotoModal open={open} onClose={() => setOpen(false)} />
      <CustomLayout
        title={self ? "your profile" : `${profile.firstName}'s profile`}
      >
        <Grid container maxWidth={800}>
          <Grid item sm={5.5} md={6}>
            <Badge
            
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <Box
                  backgroundColor="black"
                  padding={1.5}
                  borderRadius={10}
                  sx={{ cursor: "pointer", mb: 14, mr: 8 }}
                  onClick={()=>setOpen(true)}
                >
                  <CameraAltOutlined
                    color="action"
                    sx={{ color: "white", fontSize: 26 }}
                  />
                </Box>
              }
            >
              <Avatar
                sx={{ borderRadius: 2, width: 250, height: 250, mb: 3 }}
              />
              {/* <MailIcon color="action" /> */}
            </Badge>
            <Box>
              <Typography>First Name: {profile?.firstName}</Typography>
              <Typography>Last Name: {profile?.lastName}</Typography>
              <Typography>Last Name: {profile?.email}</Typography>
            </Box>
          </Grid>

          <Grid
            item
            sm={5.5}
            md={6}
            // border={"2px solid grey"}
            borderRadius={1}
            // padding={2}
            // backgroundColor='white'
          >
            <Typography textTransform={"uppercase"} fontWeight={600}>
              recent activity
            </Typography>

            <Box></Box>
          </Grid>
        </Grid>
      </CustomLayout>
    </AuthLayout>
  );
}

export default Profile;
