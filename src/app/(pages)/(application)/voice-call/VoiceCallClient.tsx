"use client";

import dynamic from "next/dynamic";

const VoiceCallComponent = dynamic(() => import("@/components/application/voiceCall"), {
  ssr: false,
});

export default function VoiceCallClient() {
  return (
    <>
      <VoiceCallComponent />
    </>
  );
}

