import { Metadata } from "next";
import LabResultsClient from "./LabResultsClient";

export const metadata: Metadata = {
  title:
    "Lab result | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function LabResultPage() {
  return (
    <>
      <LabResultsClient />
    </>
  );
}
