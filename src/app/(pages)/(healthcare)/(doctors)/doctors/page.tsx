import { Metadata } from "next";
import DoctorsClient from "./DoctorsClient";

export const metadata: Metadata = {
  title:
    "Doctors | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function DoctorsPage() {
  return (
    <>
      <DoctorsClient />
    </>
  );
}
