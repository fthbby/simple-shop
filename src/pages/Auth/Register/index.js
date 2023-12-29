import React, { useState } from "react";
import CustomLayout from "../../../layouts/CustomLayout";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CustomInput from "../../../components/input/CustomInput";
import MaroonButton from "../../../components/buttons/MaroonButton";
import * as authAPI from "../../../api/routes/auth";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../stateManagement/atom/userAtom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userAtom);

  const onRegister = async () => {
    try {
      let data = {
        firstName,
        lastName,
        email,
        password,
      };

      let res = await authAPI.register(data);

      if (res.data.success) {
        setUser(res.data.data);
        navigate("/");
      }
    } catch (err) {}
  };

  return (
    <CustomLayout title={"Register"}>
      <Box width={400} mt={5}>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"space-between"}
          width={"100%"}
        >
          <Grid item xs={12} sm={5.75} md={5.75} pb={2}>
            <CustomInput
              title="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={5.75} md={5.75} pb={2}>
            <CustomInput
              title="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} pb={2}>
            <CustomInput
              title="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} pb={2}>
            <CustomInput
              title="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5.75} pb={2}>
            <CustomInput title="Confirm Password" />
          </Grid>

          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            mt={3}
          >
            <MaroonButton title="Register" onClick={onRegister} />
          </Box>
        </Grid>
      </Box>
    </CustomLayout>
  );
}

export default Register;
