"use client";

import dynamic from "next/dynamic";

const PatientDetailsVitalSignsComponent = dynamic(() => import("@/components/patients/patientDetailsVitalSigns"), {
  ssr: false,
});

export default function PatientDetailsVitalSignClient() {
  return (
    <>
      <PatientDetailsVitalSignsComponent />
    </>
  );
}

