import { Metadata } from "next";
import AddPatientClient from "./AddPatientClient";

export const metadata: Metadata = {
  title:
    "Add Patient | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AddPatientsPage() {
  return (
    <>
      <AddPatientClient />
    </>
  );
}
