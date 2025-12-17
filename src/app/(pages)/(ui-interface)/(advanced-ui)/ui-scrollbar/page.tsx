import { Metadata } from "next";
import UiScrollbarClient from "./UiScrollbarClient";

export const metadata: Metadata = {
  title:
    "Scrollbar | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function ScrollbarPage() {
  return (
    <>
      <UiScrollbarClient />
    </>
  );
}
