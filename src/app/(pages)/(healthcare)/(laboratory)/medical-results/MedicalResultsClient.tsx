"use client";

import dynamic from "next/dynamic";

const MedicalResultsComponent = dynamic(() => import("@/components/laboratory/medical-results/medicalResults"), {
  ssr: false,
});

export default function MedicalResultsClient() {
  return (
    <>
      <MedicalResultsComponent />
    </>
  );
}

