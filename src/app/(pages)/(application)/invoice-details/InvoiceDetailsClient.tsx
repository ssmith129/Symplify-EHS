"use client";

import dynamic from "next/dynamic";

const InvoiceDetailsComponent = dynamic(() => import("@/components/application/invoiceDetails"), {
  ssr: false,
});

export default function InvoiceDetailsClient() {
  return (
    <>
      <InvoiceDetailsComponent />
    </>
  );
}

