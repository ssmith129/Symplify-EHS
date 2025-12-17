"use client";

import dynamic from "next/dynamic";

const PatientDetailsPrescriptionComponent = dynamic(() => import("@/components/patients/patientDetailsPrescription"), {
  ssr: false,
});

export default function PatientDetailsPrescriptionClient() {
  return (
    <>
      <PatientDetailsPrescriptionComponent />
    </>
  );
}

