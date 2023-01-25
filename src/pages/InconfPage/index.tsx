import Box from "@mui/material/Box";

import Controls from "./Controls";
import InconfHeader from "./InconfHeader";
import VideosContainer from "./VideosContainer";

const Inconf = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#464646",
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <InconfHeader />
      <VideosContainer />
      <Controls />
    </Box>
  );
};

export default Inconf;
