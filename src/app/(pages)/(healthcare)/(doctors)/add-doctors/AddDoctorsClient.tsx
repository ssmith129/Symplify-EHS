"use client";

import dynamic from "next/dynamic";

const AddDoctorsComponent = dynamic(() => import("@/components/doctors/addDoctors"), {
  ssr: false,
});

export default function AddDoctorsClient() {
  return (
    <>
      <AddDoctorsComponent />
    </>
  );
}

