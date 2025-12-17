import { Metadata } from "next";
import VideoCallClient from "./VideoCallClient";

export const metadata: Metadata = {
  title:
    "Video Call | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function VideoCallPage() {
  return (
    <>
      <VideoCallClient />
    </>
  );
}
