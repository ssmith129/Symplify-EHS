import { Metadata } from "next";
import PharmacyClient from "./PharmacyClient";

export const metadata: Metadata = {
  title:
    "Pharmacy | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PharmacyPage() {
  return (
    <>
      <PharmacyClient />
    </>
  );
}
