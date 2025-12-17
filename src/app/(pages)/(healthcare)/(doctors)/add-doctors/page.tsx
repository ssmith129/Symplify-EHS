import { Metadata } from "next";
import AddDoctorsClient from "./AddDoctorsClient";

export const metadata: Metadata = {
  title:
    "Add doctors | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AddDoctorsPage() {
  return (
    <>
      <AddDoctorsClient />
    </>
  );
}
