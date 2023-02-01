import { useMemo } from "react";

import Box from "@mui/material/Box";

import VideoImage from "./VideoImage";

import { useUiContext } from "../../context";

const VideosContainer = () => {
  const { state } = useUiContext();
  const { pannelWidth, isChatPanelOpen, isParticipantsPanelOpen } = state;

  const isPannelOpen = useMemo(
    () => isChatPanelOpen || isParticipantsPanelOpen,
    [state]
  );

  return (
    <Box
      component="main"
      sx={{
        maxHeight: "100vh",
        overflowY: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        p: 5,
        flex: 1,
        mr: isPannelOpen ? `${pannelWidth}px` : 0,
      }}
    >
      <VideoImage />
    </Box>
  );
};

export default VideosContainer;
