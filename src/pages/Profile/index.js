import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  Typography,
  Badge,
  Divider,
  Input,
} from "@mui/material";
import AuthLayout from "../../layouts/AuthLayout";
import CustomLayout from "../../layouts/CustomLayout";

import { useRecoilState } from "recoil";
import { userAtom } from "../../stateManagement/atom/userAtom";
import { useParams } from "react-router-dom";
import * as userAPI from "../../api/routes/user";
import { Camera, CameraAltOutlined } from "@mui/icons-material";
import PhotoModal from "../../components/modals/PhotoModal";
import EditIcon from "@mui/icons-material/Edit";
import EditProfileModal from "../../components/modals/EditProfileModal";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useRecoilState(userAtom);
  const [profile, setProfile] = useState("");
  const [self, setSelf] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (id === user._id) {
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

  useEffect(() => {
    getUser();
  }, [id]);

  const onEdit = () => {
    setEdit(!edit);
  };
  return (
    <AuthLayout>
      <EditProfileModal open={edit} onClose={() => setEdit(false)} />
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
                  onClick={() => setOpen(true)}
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
                src={user?.image ? user?.image : ""}
              />
              {/* <MailIcon color="action" /> */}
            </Badge>
            <Divider sx={{ marginY: 3 }} />

            <Typography fontWeight={600}>USER INFO</Typography>
            <Box border={"2px solid #C97878"} borderRadius={1} padding={2}>
              <Typography pb={1}>First Name: {profile?.firstName}</Typography>
              <Typography pb={1}>Last Name: {profile?.lastName}</Typography>
              <Typography pb={1}>Email: {profile?.email}</Typography>

              {self && (
                <Box display="flex" justifyContent={"flex-end"}>
                  <Box
                    backgroundColor="black"
                    borderRadius={10}
                    width={40}
                    height={40}
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ cursor: "pointer" }}
                  >
                    <EditIcon sx={{ color: "white" }} onClick={onEdit} />
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item sm={5.5} md={6} borderRadius={1}>
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
