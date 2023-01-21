import Box from "@mui/material/Box";

import Controls from "./Controls";
import InconfHeader from "./InconfHeader";
import VideoImage from "./VideoImage";

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
      <Box
        sx={{
          width: "100%",
          maxHeight: "100vh",
          overflowY: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          p: 5,
          flex: 1,
        }}
      >
        <VideoImage />
      </Box>
      <Controls />
    </Box>
  );
};

export default Inconf;
