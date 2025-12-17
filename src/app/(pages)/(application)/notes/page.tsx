import { Metadata } from "next";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title:
    "Notes | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function NotesPage() {
  return (
    <>
      <NotesClient />
    </>
  );
}
