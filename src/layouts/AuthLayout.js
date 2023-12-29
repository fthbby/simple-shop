import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AuthLayout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  return <Box>{props.children}</Box>;
}

export default AuthLayout;
