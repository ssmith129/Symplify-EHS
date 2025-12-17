import { Metadata } from "next";
import StaffsClient from "./StaffsClient";

export const metadata: Metadata = {
  title:
    "Staffs | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function StaffsPage() {
  return (
    <>
      <StaffsClient />
    </>
  );
}
