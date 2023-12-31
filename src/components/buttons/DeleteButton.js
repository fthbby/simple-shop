import React from "react";
import { Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function DeleteButton({ onClick, ...props }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: "black",
        width: 25,
        height: 25,
        padding: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        cursor: "pointer",
        ...props
      }}
    >
      <CloseIcon sx={{ color: "white" }} />
    </Box>
  );
}

export default DeleteButton;
