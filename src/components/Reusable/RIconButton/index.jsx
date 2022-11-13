import { IconButton, Tooltip } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
/**
 *@function EditButton.jsx
 *@author Azim
 *
 **/

const RIconButton = (props) => {
  const { title, placement, style, onClick, children, className, color, size } =
    props;
  return (
    <Tooltip
      title={title ? title : ""}
      arrow
      placement={placement ? placement : "right"}
    >
      <IconButton
        className={className}
        style={style}
        onClick={onClick}
        aria-label="Edit"
        color={color}
        aria-describedby={props.id}
        size={size}
      >
        {children ? children : <EditIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default RIconButton;
