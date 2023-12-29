import React, { useEffect, useState } from "react";
import { Box, Modal, Grid, Typography } from "@mui/material";
import WhiteButton from "../buttons/WhiteButton";
import MaroonButton from "../buttons/MaroonButton";
import * as productAPI from "../../api/routes/product";

function DeleteModal({ product, open, onClose }) {
  const onDelete = async () => {
    try {
      let id = product._id;
      let res = await productAPI.remove(id);
      if (res?.data?.success) {
        onClose();
        window.location.reload();
      }
    } catch (err) {
      console.log("err :", err);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box style={styles.modal} padding={3}>
        <Box>
          <Typography textTransform={"uppercase"} mb={3}>
            Are you sure you want to delete
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <Typography fontWeight={600}>{product?.title}</Typography>?
            </Box>
          </Typography>

          <Box
            mt={2}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <WhiteButton title="Cancel" onClick={onClose} />
            <MaroonButton title="Submit" onClick={onDelete} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteModal;

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "1px solid #000",
    borderRadius: 10,
  },
};
