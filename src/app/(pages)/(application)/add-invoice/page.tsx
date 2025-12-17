import { Metadata } from "next";
import AddInvoiceClient from "./AddInvoiceClient";

export const metadata: Metadata = {
  title:
    "Add Invoice | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function AddInvoicePage() {
  return (
    <>
      <AddInvoiceClient />
    </>
  );
}
