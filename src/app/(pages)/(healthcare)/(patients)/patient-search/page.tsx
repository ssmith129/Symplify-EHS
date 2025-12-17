import { Metadata } from "next";
import PaitentSearchClient from "./patientSearchClient";
export const metadata: Metadata = {
  title:
    "Patient Search | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientSearch() {
  return (
    <>
      <PaitentSearchClient />
    </>
  );
}
