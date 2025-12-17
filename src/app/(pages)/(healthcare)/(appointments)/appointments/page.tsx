import { Metadata } from "next";
import AppointmentsClient from "./AppointmentsClient";

export const metadata: Metadata = {
  title:
    "Appointments | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AppointmentsPage() {
  return (
    <>
      <AppointmentsClient />
    </>
  );
}
