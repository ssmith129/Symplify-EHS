"use client";

import dynamic from "next/dynamic";

const InvoiceComponent = dynamic(() => import("@/components/application/invoice"), {
  ssr: false,
});

export default function InvoiceClient() {
  return (
    <>
      <InvoiceComponent />
    </>
  );
}

