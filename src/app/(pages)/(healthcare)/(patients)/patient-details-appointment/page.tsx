import { Metadata } from "next";
import PatientDetailsAppointmentClient from "./PatientDetailsAppointmentClient";

export const metadata: Metadata = {
  title:
    "Patient Details Appointment | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function PatientsDetailsAppointmentPage() {
  return (
    <>
      <PatientDetailsAppointmentClient />
    </>
  );
}
