import { Metadata } from "next";
import PatientDetailsVitalSignClient from "./PatientDetailsVitalSignClient";

export const metadata: Metadata = {
  title:
    "Patient Details Vital Sign | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsVitalSignPage() {
  return (
    <>
      <PatientDetailsVitalSignClient />
    </>
  );
}
