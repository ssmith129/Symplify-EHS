import { Metadata } from "next";
import ChatClient from "./ChatClient";

export const metadata: Metadata = {
  title:
    "Chat | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function ChatPage() {
  return (
    <>
      <ChatClient />
    </>
  );
}
