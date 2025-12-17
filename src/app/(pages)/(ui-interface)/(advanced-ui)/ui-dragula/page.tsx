import { Metadata } from "next";
import UiDragulaClient from "./UiDragulaClient";

export const metadata: Metadata = {
  title:
    "Dragula | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function DragulaPage() {
  return (
    <>
      <UiDragulaClient />
    </>
  );
}
