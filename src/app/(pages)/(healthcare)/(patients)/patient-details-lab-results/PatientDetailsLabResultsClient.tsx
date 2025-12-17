"use client";

import dynamic from "next/dynamic";

const PatientDetailsLabResultsComponent = dynamic(() => import("@/components/patients/patientDetailsLabResults"), {
  ssr: false,
});

export default function PatientDetailsLabResultsClient() {
  return (
    <>
      <PatientDetailsLabResultsComponent />
    </>
  );
}

