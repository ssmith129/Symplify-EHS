import { Metadata } from "next";
import EmailComposeClient from "./EmailComposeClient";

export const metadata: Metadata = {
  title:
    "Email Compose | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function EmailComposePage() {
  return (
    <>
      <EmailComposeClient />
    </>
  );
}
