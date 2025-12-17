"use client";

import dynamic from "next/dynamic";

const EditDoctorsComponent = dynamic(() => import("@/components/doctors/editDoctors"), {
  ssr: false,
});

export default function EditDoctorsClient() {
  return (
    <>
      <EditDoctorsComponent />
    </>
  );
}

