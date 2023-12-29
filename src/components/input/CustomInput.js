import React, { useEffect, useState } from "react";
import { Box, Typography, Input } from "@mui/material";

function CustomInput({ title,onChange,value='',placeholder='', ...props }) {
  return (
    <Box>
      <Typography fontSize={12} fontWeight={600}>
        {title}
      </Typography>
      <Input
        disableUnderline
        onChange={onChange}
        placeholder={placeholder}
        sx={{
          border: "1px solid gray",
          borderRadius: 1,
          paddingLeft: 1,
          width: "100%",
        }}
        value={value}
        {...props}
      />
    </Box>
  );
}

export default CustomInput;
