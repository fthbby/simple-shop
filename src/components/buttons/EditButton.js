import React from "react";
import { Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Edit } from "@mui/icons-material";
function EditButton({ onClick, ...props }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        background: "#C97878",
        width: 25,
        height: 25,
        padding: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        cursor: "pointer",
        ...props,
      }}
    >
      <Edit sx={{ color: "white" }} />
    </Box>
  );
}

export default EditButton;
