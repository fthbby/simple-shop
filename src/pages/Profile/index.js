import React, { useEffect, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import CustomLayout from "../../layouts/CustomLayout";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { userAtom } from "../../stateManagement/atom/userAtom";
import { useParams } from "react-router-dom";
import * as userAPI from "../../api/routes/user";
function Profile() {
  const { id } = useParams();
  const [user, setUser] = useRecoilState(userAtom);
  const [profile, setProfile] = useState("");

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
      <CustomLayout title="profile">
        <Grid container maxWidth={800}>
          <Grid item md={6}>
            <Avatar sx={{ borderRadius: 2, width: 250, height: 250, mb: 3 }} />
            <Box>
              <Typography>
                First Name: {profile?.firstName}
              </Typography>
              <Typography>Last Name: {profile?.lastName}</Typography>
              <Typography>Last Name: {profile?.email}</Typography>
            </Box>
          </Grid>

          <Grid
            item
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
