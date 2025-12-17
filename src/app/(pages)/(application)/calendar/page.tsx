import { Metadata } from "next";
import CalendarClient from "./CalendarClient";

export const metadata: Metadata = {
  title:
    "Calendar | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function CalendarPage() {
  return (
    <>
      <CalendarClient />
    </>
  );
}
