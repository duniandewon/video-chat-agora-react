import { TextField as Input } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  id: string;
  type?: string;
  label: string;
  name: string;
  value: HTMLInputElement["value"];
  helperText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = (props: Props) => {
  return <Input fullWidth variant="outlined" {...props} />;
};

export default TextField;
