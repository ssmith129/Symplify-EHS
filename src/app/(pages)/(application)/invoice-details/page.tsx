import { Metadata } from "next";
import InvoiceDetailsClient from "./InvoiceDetailsClient";

export const metadata: Metadata = {
  title:
    "Invoice Details | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function InvoiceDetailsPage() {
  return (
    <>
      <InvoiceDetailsClient />
    </>
  );
}
