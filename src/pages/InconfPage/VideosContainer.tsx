import Box from "@mui/material/Box";

import VideoImage from "./VideoImage";

const VideosContainer = () => {
  return (
    <Box
    component="main"
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
  );
};

export default VideosContainer;
