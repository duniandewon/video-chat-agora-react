import { useMemo } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import LogoutIcon from "@mui/icons-material/Logout";
import ComputerIcon from "@mui/icons-material/Computer";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MicIcon from "@mui/icons-material/Mic";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";

import { useNavigate } from "react-router-dom";

import {
  useUiContext,
  toggleChatPanel,
  toggleParticipantsPanel,
} from "../../context";

const Controls = () => {
  const { state, dispatch } = useUiContext();
  const { pannelWidth, isChatPanelOpen, isParticipantsPanelOpen } = state;

  const navigate = useNavigate();

  const isPannelOpen = useMemo(
    () => isChatPanelOpen || isParticipantsPanelOpen,
    [state]
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        gap: 2,
        pr: isPannelOpen ? `${pannelWidth}px` : 0,
      }}
    >
      <Button variant="contained">
        <PhotoCameraIcon />
      </Button>
      <Button variant="contained">
        <MicIcon />
      </Button>
      <Button variant="contained">
        <ComputerIcon />
      </Button>
      <Button variant="contained" onClick={() => toggleChatPanel(dispatch)}>
        <ChatIcon />
      </Button>
      <Button
        variant="contained"
        onClick={() => toggleParticipantsPanel(dispatch)}
      >
        <GroupsIcon />
      </Button>
      <Button variant="contained" color="error" onClick={() => navigate("/")}>
        <LogoutIcon />
      </Button>
    </Box>
  );
};

export default Controls;
