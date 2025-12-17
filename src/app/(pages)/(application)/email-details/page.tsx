import { Metadata } from "next";
import EmailDetailsClient from "./EmailDetailsClient";

export const metadata: Metadata = {
  title:
    "Email Details | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function EmailDetailsPage() {
  return (
    <>
      <EmailDetailsClient />
    </>
  );
}
