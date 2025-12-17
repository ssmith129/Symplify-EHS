import { Metadata } from "next";
import PatientDetailsClient from "./PatientDetailsClient";

export const metadata: Metadata = {
  title:
    "Patient Details | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsPage() {
  return (
    <>
      <PatientDetailsClient />
    </>
  );
}
