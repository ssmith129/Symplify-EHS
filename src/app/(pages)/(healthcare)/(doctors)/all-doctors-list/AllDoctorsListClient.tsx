"use client";

import dynamic from "next/dynamic";

const AllDoctorsListComponent = dynamic(() => import("@/components/doctors/allDoctorsList"), {
  ssr: false,
});

export default function AllDoctorsListClient() {
  return (
    <>
      <AllDoctorsListComponent />
    </>
  );
}

