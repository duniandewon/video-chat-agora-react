import Box from "@mui/material/Box";

import Controls from "./Controls";
import InconfHeader from "./InconfHeader";
import VideosContainer from "./VideosContainer";

import ChatPanel from "../../components/ChatPanel";
import ParticipantsPanel from "../../components/ParticipantsPanel";

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
      <ChatPanel />
      <ParticipantsPanel />
      <Controls />
    </Box>
  );
};

export default Inconf;
