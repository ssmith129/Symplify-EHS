"use client";

import dynamic from "next/dynamic";

const DoctorDetailsComponent = dynamic(() => import("@/components/doctors/doctorDetails"), {
  ssr: false,
});

export default function DoctorsDetailsClient() {
  return (
    <>
      <DoctorDetailsComponent />
    </>
  );
}

