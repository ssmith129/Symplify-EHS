"use client";

import dynamic from "next/dynamic";

const AddInvoiceComponent = dynamic(() => import("@/components/application/addInvoice"), {
  ssr: false,
});

export default function AddInvoiceClient() {
  return (
    <>
      <AddInvoiceComponent />
    </>
  );
}

