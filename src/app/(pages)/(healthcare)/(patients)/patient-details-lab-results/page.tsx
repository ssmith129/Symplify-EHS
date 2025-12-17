import { Metadata } from "next";
import PatientDetailsLabResultsClient from "./PatientDetailsLabResultsClient";

export const metadata: Metadata = {
  title:
    "Patient Details Lab Result | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsLabResultPage() {
  return (
    <>
      <PatientDetailsLabResultsClient />
    </>
  );
}
