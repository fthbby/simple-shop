import React, { useState } from "react";
import CustomLayout from "../../../layouts/CustomLayout";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CustomInput from "../../../components/input/CustomInput";
import MaroonButton from "../../../components/buttons/MaroonButton";
import * as authAPI from "../../../api/routes/auth";
import { useRecoilState } from "recoil";
import { userAtom } from "../../../stateManagement/atom/userAtom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userAtom);

  const onLogin = async () => {
    try {
      let data = {
        email,
        password,
      };
      let res = await authAPI.login(data);

      console.log("res :", res.data);
      if (res.data.success) {
        setUser(res.data.data);
        navigate("/");
        window.location.reload()
      }
    } catch (err) {}
  };

  const onSignUp = () => {
    navigate("/register");
  };
  return (
    <CustomLayout title="Login">
      <Box width={400} mt={5}>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"space-between"}
          width={"100%"}
        >
          <Grid item xs={12} sm={12} md={12} pb={2}>
            <CustomInput
              title="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} pb={2}>
            <CustomInput
              title="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            mt={3}
            mb={3}
          >
            <MaroonButton title="Login" onClick={onLogin} />
          </Box>
        </Grid>

        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          <Typography
            color="#C97878"
            fontWeight={600}
            fontSize={12}
            letterSpacing={1}
            textTransform={"uppercase"}
            mr={1}
          >
            No Account?
          </Typography>

          <Typography
            fontWeight={600}
            fontSize={12}
            letterSpacing={1}
            textTransform={"uppercase"}
            sx={{ cursor: "pointer" }}
            onClick={onSignUp}
          >
            Sign Up
          </Typography>
        </Box>
      </Box>
    </CustomLayout>
  );
}

export default Login;
