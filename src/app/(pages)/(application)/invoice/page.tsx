import { Metadata } from "next";
import InvoiceClient from "./InvoiceClient";

export const metadata: Metadata = {
  title:
    "Invoice | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function InvoicePage() {
  return (
    <>
      <InvoiceClient />
    </>
  );
}
