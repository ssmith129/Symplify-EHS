import { Metadata } from "next";
import AllPatientsListClient from "./AllPatientsListClient";

export const metadata: Metadata = {
  title:
    "All Patients List | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AllPatientsListPage() {
  return (
    <>
      <AllPatientsListClient />
    </>
  );
}
