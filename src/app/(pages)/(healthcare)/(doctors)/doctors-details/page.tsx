import { Metadata } from "next";
import DoctorsDetailsClient from "./DoctorsDetailsClient";

export const metadata: Metadata = {
  title:
    "Doctors Details | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function DoctorsDetailsPage() {
  return (
    <>
      <DoctorsDetailsClient />
    </>
  );
}
