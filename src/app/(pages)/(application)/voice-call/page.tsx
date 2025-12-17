import { Metadata } from "next";
import VoiceCallClient from "./VoiceCallClient";

export const metadata: Metadata = {
  title:
    "Voice Call | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function VoiceCallPage() {
  return (
    <>
      <VoiceCallClient />
    </>
  );
}
