import { Metadata } from "next";
import ContactsClient from "./ContactsClient";

export const metadata: Metadata = {
  title:
    "Contacts | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function ContactsPage() {
  return (
    <>
      <ContactsClient />
    </>
  );
}
