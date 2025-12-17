"use client";

import dynamic from "next/dynamic";

const DoctorsComponent = dynamic(() => import("@/components/doctors/doctors"), {
  ssr: false,
});

export default function DoctorsClient() {
  return (
    <>
      <DoctorsComponent />
    </>
  );
}

