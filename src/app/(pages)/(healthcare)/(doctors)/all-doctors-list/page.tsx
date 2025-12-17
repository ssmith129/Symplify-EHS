import { Metadata } from "next";
import AllDoctorsListClient from "./AllDoctorsListClient";

export const metadata: Metadata = {
  title:
    "All doctors list | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AllDoctorsListPage() {
  return (
    <>
      <AllDoctorsListClient />
    </>
  );
}
