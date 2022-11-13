import { Button } from "@mui/material";
import React from "react";
/**
 *@function SubmitButton.jsx
 *@author Azim
 *
 **/

const SubmitButton = ({ classes, handleSubmitUpdatedData }) => {
  return (
    <Button
      className={classes.submitAndCloseButton}
      color="primary"
      variant="contained"
      onClick={handleSubmitUpdatedData}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
