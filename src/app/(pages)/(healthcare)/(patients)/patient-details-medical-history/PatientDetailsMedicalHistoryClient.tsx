"use client";

import dynamic from "next/dynamic";

const PatientDetailsMedicalHistoryComponent = dynamic(() => import("@/components/patients/patientDetailsMedicalHistory"), {
  ssr: false,
});

export default function PatientDetailsMedicalHistoryClient() {
  return (
    <>
      <PatientDetailsMedicalHistoryComponent />
    </>
  );
}

