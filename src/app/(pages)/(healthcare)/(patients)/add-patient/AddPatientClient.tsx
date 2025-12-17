"use client";

import dynamic from "next/dynamic";

const AddPatientComponent = dynamic(() => import("@/components/patients/addPatient"), {
  ssr: false,
});

export default function AddPatientClient() {
  return (
    <>
      <AddPatientComponent />
    </>
  );
}

