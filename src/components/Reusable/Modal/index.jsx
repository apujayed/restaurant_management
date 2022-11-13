import { makeStyles } from "@mui/styles";
import { Modal as ReUseModal, Box } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Modal({ open, handleClose, children }) {
  const classes = useStyles();
  return (
    <ReUseModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </ReUseModal>
  );
}
export default Modal;
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette?.background?.paper,
    borderRadius: "6px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    overflowY: "scroll",
    maxHeight: "650px",
    minHeight: "300px",
    minWidth: "622px",
    maxWidth: "100%",

    padding: "16px",
    "&:focus-visible": {
      outline: "none",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,.5)",
    },
  },

  buttonOfClose: {
    position: "absolute",
    zIndex: "111",
    left: "87%",
    top: "1",
    cursor: "pointer",
  },
  InputFiled: {
    marginTop: "30px",
    marginBottom: "10px",
  },
}));
