import React, { Fragment } from "react";
import { Box } from "@mui/material";
import HookFormTextField from "../HookFormTextField";

/**
 *@function FormsGrouped.jsx
 *@author Azim
 *
 **/

const FormsGrouped = (props) => {
  const { mapedForm, control, errors } = props;
  return (
    <Box>
      {mapedForm.map((item, index) => (
        <Fragment key={index}>
          <br />
          <label>{item.label}</label>
          <HookFormTextField control={control} {...item} errors={errors} />
        </Fragment>
      ))}
    </Box>
  );
};

export default FormsGrouped;
