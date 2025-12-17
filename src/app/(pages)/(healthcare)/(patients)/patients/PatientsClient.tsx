"use client";

import dynamic from "next/dynamic";

const PatientsComponent = dynamic(() => import("@/components/patients/patients"), {
  ssr: false,
});

export default function PatientsClient() {
  return (
    <>
      <PatientsComponent />
    </>
  );
}

