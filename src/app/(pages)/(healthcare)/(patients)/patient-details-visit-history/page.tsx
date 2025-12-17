import { Metadata } from "next";
import PatientDetailsVisitHistoryClient from "./PatientDetailsVisitHistoryClient";

export const metadata: Metadata = {
  title:
    "Patient Details Vital History | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsVitalHistoryPage() {
  return (
    <>
      <PatientDetailsVisitHistoryClient />
    </>
  );
}
