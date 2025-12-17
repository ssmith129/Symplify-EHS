import { Metadata } from "next";
import ContactListClient from "./ContactListClient";

export const metadata: Metadata = {
  title:
    "Contact List | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function ContactListePage() {
  return (
    <>
      <ContactListClient />
    </>
  );
}
