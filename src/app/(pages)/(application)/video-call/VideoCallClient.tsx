"use client";

import dynamic from "next/dynamic";

const VideoCallComponent = dynamic(() => import("@/components/application/videoCall"), {
  ssr: false,
});

export default function VideoCallClient() {
  return (
    <>
      <VideoCallComponent />
    </>
  );
}

