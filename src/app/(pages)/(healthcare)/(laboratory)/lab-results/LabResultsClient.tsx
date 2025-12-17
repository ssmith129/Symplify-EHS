"use client";

import dynamic from "next/dynamic";

const LabResultsComponent = dynamic(() => import("@/components/laboratory/lab-results/labResults"), {
  ssr: false,
});

export default function LabResultsClient() {
  return (
    <>
      <LabResultsComponent />
    </>
  );
}

