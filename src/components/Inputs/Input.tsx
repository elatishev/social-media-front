import React, { forwardRef, FC } from "react";
import { TextField } from "@mui/material";

interface IProps {
  id: string;
  type: string;
  label: string;
  name: string;
}

const Input: FC<IProps> = forwardRef((props, ref) => {
  return <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props} />;
});

export default Input;
