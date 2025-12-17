import { Metadata } from "next";
import PatientsClient from "./PatientsClient";

export const metadata: Metadata = {
  title:
    "Patient | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsPage() {
  return (
    <>
      <PatientsClient />
    </>
  );
}
