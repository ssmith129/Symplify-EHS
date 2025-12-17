"use client";

import dynamic from "next/dynamic";

const AllPatientsListComponent = dynamic(() => import("@/components/patients/allPatientsList"), {
  ssr: false,
});

export default function AllPatientsListClient() {
  return (
    <>
      <AllPatientsListComponent />
    </>
  );
}

