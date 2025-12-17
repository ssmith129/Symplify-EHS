"use client";

import dynamic from "next/dynamic";

const PharmacyComponent = dynamic(() => import("@/components/pharmacy/pharmacy"), {
  ssr: false,
});

export default function PharmacyClient() {
  return (
    <>
      <PharmacyComponent />
    </>
  );
}

