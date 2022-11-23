import { Fragment } from "react";
import { Controller } from "react-hook-form";
import React from "react";
import { TextField } from "@mui/material";
/**
 *@function HookFormTextField.jsx
 *@author Azim
 *
 **/
const HookFormTextField = ({
  rows,
  control,
  defaultValue,
  label,
  name,
  style,
  className,
  rules,
  size,
  variant,
  type,
  errors,
  InputProps,
  ...rest
}) => {
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={
          rules
            ? rules
            : {
                required: {
                  value: true,
                  message: "This is required",
                },
              }
        }
        render={({ field }) => (
          <TextField
            {...field}
            size={size ? size : "medium"}
            fullWidth
            style={style}
            {...rest}
            rows={rows}
            multiline={type === "date" || type === "number" ? false : true}
            autoComplete={type === "password" ? "true" : "false"}
            className={className}
            label={label}
            variant={variant ? variant : "outlined"}
            type={type ? type : "text"}
            InputProps={InputProps}
          />
        )}
      />
      {/* {errors && <ErrorMessages errors={errors} name={name} />} */}
    </Fragment>
  );
};

export default HookFormTextField;
// {
//   "compilerOptions": {
//     "jsx": "react",
//     "baseUrl": ".",
//     "paths": {
//       "@components/*": ["./src/components/*"]
//     }
//   }
// }
