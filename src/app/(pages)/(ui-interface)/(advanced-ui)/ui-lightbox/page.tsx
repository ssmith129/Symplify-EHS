import { Metadata } from "next";
import UiLightboxClient from "./UiLightboxClient";

export const metadata: Metadata = {
  title:
    "Lightbox | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function LightboxPage() {
  return (
    <>
      <UiLightboxClient />
    </>
  );
}
