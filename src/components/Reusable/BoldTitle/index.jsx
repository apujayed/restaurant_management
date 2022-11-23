/**
 *@function BoldTitle.jsx
 *@author Azim
 *
 **/

import { Typography } from "@mui/material";

const BoldTitle = ({ title, component, style, fontSize }) => {
  return (
    <Typography
      component={component}
      style={
        style
          ? style
          : {
              fontWeight: "600",
              fontSize: fontSize ? fontSize : "16px",
            }
      }
    >
      {title}
    </Typography>
  );
};

export default BoldTitle;
