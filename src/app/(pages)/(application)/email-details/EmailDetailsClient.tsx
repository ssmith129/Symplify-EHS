"use client";

import dynamic from "next/dynamic";

const EmailDetailsComponent = dynamic(() => import("@/components/application/emailDetails"), {
  ssr: false,
});

export default function EmailDetailsClient() {
  return (
    <>
      <EmailDetailsComponent />
    </>
  );
}

