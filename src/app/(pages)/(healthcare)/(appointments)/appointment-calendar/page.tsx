import { Metadata } from "next";
import AppointmentCalendarClient from "./appointmentCalendarClient";
export const metadata: Metadata = {
  title:
    "Appointment Calendar | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};
export default function AppointmentCalendar() {
  return (
    <>
      <AppointmentCalendarClient />
    </>
  );
}
