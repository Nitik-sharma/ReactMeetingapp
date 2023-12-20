import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams();
  console.log(roomId, "id");

  const myMeeting = async (element) => {
    const appId = 1059256021;
    const serviceId = "274f5ae289db27e2faa9c78b5a318d0c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serviceId,
      roomId,
      Date.now().toString(),
      "Enter Your Name"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3001/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
}

export default Room;
