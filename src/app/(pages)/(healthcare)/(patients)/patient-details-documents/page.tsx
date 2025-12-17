import { Metadata } from "next";
import PatientDetailsDocumentsClient from "./PatientDetailsDocumentsClient";

export const metadata: Metadata = {
  title:
    "Patient Details Documents | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsDocumentsPage() {
  return (
    <>
      <PatientDetailsDocumentsClient />
    </>
  );
}
