import { Metadata } from "next";
import PatientDetailsPrescriptionClient from "./PatientDetailsPrescriptionClient";

export const metadata: Metadata = {
  title:
    "Patient Details Prescription | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsPrescriptionPage() {
  return (
    <>
      <PatientDetailsPrescriptionClient />
    </>
  );
}
