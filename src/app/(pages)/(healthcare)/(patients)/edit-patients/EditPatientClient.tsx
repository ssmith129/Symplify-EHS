"use client";

import dynamic from "next/dynamic";

const EditPatientComponent = dynamic(() => import("@/components/patients/editPatient"), {
  ssr: false,
});

export default function EditPatientClient() {
  return (
    <>
      <EditPatientComponent />
    </>
  );
}

