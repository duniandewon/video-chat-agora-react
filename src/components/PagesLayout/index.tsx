import { Routes, Route, Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const Wrapper = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Wrapper;
