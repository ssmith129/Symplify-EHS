import { Metadata } from "next";
import EditInvoiceClient from "./EditInvoiceClient";

export const metadata: Metadata = {
  title:
    "Edit Invoice | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function EditInvoicePage() {
  return (
    <>
      <EditInvoiceClient />
    </>
  );
}
