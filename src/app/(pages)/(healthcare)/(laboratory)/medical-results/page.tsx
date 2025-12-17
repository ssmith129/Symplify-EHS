import { Metadata } from "next";
import MedicalResultsClient from "./MedicalResultsClient";

export const metadata: Metadata = {
  title:
    "Medical result | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function MedicalResultPage() {
  return (
    <>
      <MedicalResultsClient />
    </>
  );
}
