import { Metadata } from "next";
import AppointmentConsultationClient from "./AppointmentConsultationClient";

export const metadata: Metadata = {
  title:
    "Appointment Consultation | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AppointmentConsultationPage() {
  return (
    <>
      <AppointmentConsultationClient />
    </>
  );
}
