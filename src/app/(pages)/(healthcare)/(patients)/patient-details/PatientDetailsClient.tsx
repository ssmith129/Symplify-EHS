"use client";

import dynamic from "next/dynamic";

const PatientDetailsCompoent = dynamic(() => import("@/components/patients/patientDetails"), {
  ssr: false,
});

export default function PatientDetailsClient() {
  return (
    <>
      <PatientDetailsCompoent />
    </>
  );
}

