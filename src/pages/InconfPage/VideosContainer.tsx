import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";

import VideoImage from "./VideoImage";

import { useUiContext } from "../../context";
import useAgora from "../../hooks/useAgora";

const VideosContainer = () => {
  const { state } = useUiContext();
  const { pannelWidth, isChatPanelOpen, isParticipantsPanelOpen } = state;

  const [params] = useSearchParams();

  const { joinRoom, users } = useAgora();

  const isPannelOpen = useMemo(
    () => isChatPanelOpen || isParticipantsPanelOpen,
    [state]
  );

  useEffect(() => {
    console.log("VideosContainer", params.get("roomName"));
    const roomName = params.get("roomName");
    joinRoom(roomName ? roomName : "");
  }, []);

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
      {useMemo(
        () => users.map((user) => <VideoImage key={user.uid} />),
        [users]
      )}
    </Box>
  );
};

export default VideosContainer;
