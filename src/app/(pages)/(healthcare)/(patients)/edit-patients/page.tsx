import { Metadata } from "next";
import EditPatientClient from "./EditPatientClient";

export const metadata: Metadata = {
  title:
    "Edit Patient | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function EditPatientsPage() {
  return (
    <>
      <EditPatientClient />
    </>
  );
}
