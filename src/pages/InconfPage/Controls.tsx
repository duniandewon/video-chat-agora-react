import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import LogoutIcon from "@mui/icons-material/Logout";
import ComputerIcon from "@mui/icons-material/Computer";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MicIcon from "@mui/icons-material/Mic";
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';

const Controls = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        gap: 2,
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
      <Button variant="contained">
        <ChatIcon />
      </Button>
      <Button variant="contained">
        <GroupsIcon />
      </Button>
      <Button variant="contained" color="error">
        <LogoutIcon />
      </Button>
    </Box>
  );
};

export default Controls;
