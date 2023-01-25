import { ReactNode } from "react";

import Drawer from "@mui/material/Drawer";

interface Props {
  children: ReactNode;
  open: boolean;
  width: number;
}
const Pannel = ({ children, open, width }: Props) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default Pannel;
