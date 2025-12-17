"use client";

import dynamic from "next/dynamic";

const EditInvoiceComponent = dynamic(() => import("@/components/application/editInvoice"), {
  ssr: false,
});

export default function EditInvoiceClient() {
  return (
    <>
      <EditInvoiceComponent />
    </>
  );
}

