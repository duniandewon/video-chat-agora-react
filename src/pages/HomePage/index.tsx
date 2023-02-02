import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "../../components/TextField";

const HomePage = () => {
  const [roomName, setRoomName] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    switch (e.target.name) {
      case "roomName":
        setRoomName(value);
        break;

      case "name":
        setName(value);
        break;
    }
  };

  const resetForm = () => {
    setName("");
    setRoomName("");
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!roomName) return;

    navigate(`/inconf?roomName=${roomName}`);
    resetForm();
  };

  return (
    <Box
      component={"form"}
      onSubmit={onSubmit}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        maxWidth: 500,
      }}
    >
      <TextField
        id="name"
        name="name"
        label="Your Name"
        value={name}
        onChange={onChange}
      />
      <TextField
        id="roomName"
        name="roomName"
        label="Room Name"
        value={roomName}
        onChange={onChange}
        helperText="If the room dosen't exist, one will be created for you."
      />
      <Button type="submit" variant="contained" fullWidth>
        Join Or Create Room
      </Button>
    </Box>
  );
};

export default HomePage;
