import { useCallback, useEffect, useMemo, useState } from "react";

import Agora, {
  IAgoraRTCRemoteUser,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";

const APP_ID = "b4337f13fe4340a4af9cf55baf5d4cad";
const TOKEN = null;

const useAgora = () => {
  const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [localAudioTracks, setLocalAudioTracks] =
    useState<IMicrophoneAudioTrack | null>(null);

  const client = useMemo(
    () => Agora.createClient({ mode: "rtc", codec: "vp8" }),
    []
  );

  const joinRoom = async (roomName: string) => {
    const user = await client.join(APP_ID, roomName, TOKEN);

    const audioTrack = await Agora.createMicrophoneAudioTrack();
    // const videoTrack = await Agora.createCameraVideoTrack();

    setLocalAudioTracks(audioTrack);

    setUsers((prev) => [
      ...prev,
      {
        uid: user,
        hasAudio: audioTrack.enabled,
        hasVideo: false,
      },
    ]);

    // client.publish([audioTrack, videoTrack]);
    client.publish(audioTrack);
  };

  const leaveRoom = async () => {
    localAudioTracks?.stop();
    localAudioTracks?.close();

    await client.leave();
  };

  const onUserJoined = async (
    user: IAgoraRTCRemoteUser,
    mediaType: "audio" | "video"
  ) => {
    await client.subscribe(user, mediaType);

    // if (mediaType === "video")
    setUsers((prev) => [...prev, user]);

    if (mediaType === "audio") user.audioTrack?.play();
  };

  const onUserLeft = (user: IAgoraRTCRemoteUser) =>
    setUsers((prev) => prev.filter((u) => u.uid !== user.uid));

  useEffect(() => {
    client.on("user-published", onUserJoined);
    client.on("user-left", onUserLeft);

    return () => {
      leaveRoom();
      client.off("user-published", onUserJoined);
      client.off("user-left", onUserLeft);
    };
  }, []);

  return { users, joinRoom, leaveRoom };
};

export default useAgora;
