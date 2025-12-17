import { Metadata } from "next";
import PatientDetailsInsuranceClient from "./patientDetailsInsuranceClient";
export const metadata: Metadata = {
  title:
    "Patient Details Insurance | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};
export default function PatientDetailsInsurance() {
  return (
    <>
      <PatientDetailsInsuranceClient />
    </>
  );
}
