import { Metadata } from "next";
import EditDoctorsClient from "./EditDoctorsClient";

export const metadata: Metadata = {
  title:
    "Edit doctors | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function EditDoctorsPage() {
  return (
    <>
      <EditDoctorsClient />
    </>
  );
}
