import { Metadata } from "next";
import UiClipboardClient from "./UiClipboardClient";

export const metadata: Metadata = {
  title:
    "Clipboard | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function ClipboardPage() {
  return (
    <>
      <UiClipboardClient />
    </>
  );
}
