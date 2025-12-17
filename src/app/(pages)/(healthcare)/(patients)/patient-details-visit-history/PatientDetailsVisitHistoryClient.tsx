"use client";

import dynamic from "next/dynamic";

const PatientDetailsVisitHistoryComponent = dynamic(() => import("@/components/patients/patientDetailsVisitHistory"), {
  ssr: false,
});

export default function PatientDetailsVisitHistoryClient() {
  return (
    <>
      <PatientDetailsVisitHistoryComponent />
    </>
  );
}

