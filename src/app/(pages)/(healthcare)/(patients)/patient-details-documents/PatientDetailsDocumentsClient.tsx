"use client";

import dynamic from "next/dynamic";

const PatientDetailsDocumentsComponent = dynamic(() => import("@/components/patients/patientDetailsDocuments"), {
  ssr: false,
});

export default function PatientDetailsDocumentsClient() {
  return (
    <>
      <PatientDetailsDocumentsComponent />
    </>
  );
}

