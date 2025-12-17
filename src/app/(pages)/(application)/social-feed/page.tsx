import { Metadata } from "next";
import SocialFeedClient from "./SocialFeedClient";

export const metadata: Metadata = {
  title:
    "Social Feed | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function NotesPage() {
  return (
    <>
      <SocialFeedClient />
    </>
  );
}
