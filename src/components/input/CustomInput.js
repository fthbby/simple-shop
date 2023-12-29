import React, { useEffect, useState } from "react";
import { Box, Typography, Input } from "@mui/material";

function CustomInput({ title, ...props }) {
  return (
    <Box>
      <Typography fontSize={12} fontWeight={600}>
        {title}
      </Typography>
      <Input
        disableUnderline
        sx={{
          border: "1px solid gray",
          borderRadius: 1,
          paddingLeft: 1,
          width: "100%",
        }}
        {...props}
      />
    </Box>
  );
}

export default CustomInput;
