"use client";

import dynamic from "next/dynamic";

const ChatComponent = dynamic(() => import("@/components/application/chat"), {
  ssr: false,
});

export default function ChatClient() {
  return (
    <>
      <ChatComponent />
    </>
  );
}

