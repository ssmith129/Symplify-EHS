import { Metadata } from "next";
import EmailClient from "./EmailClient";

export const metadata: Metadata = {
  title:
    "Email | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function EmailPage() {
  return (
    <>
      <EmailClient />
    </>
  );
}
