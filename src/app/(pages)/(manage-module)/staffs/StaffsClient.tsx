"use client";

import dynamic from "next/dynamic";

const StaffsComponent = dynamic(() => import("@/components/manage/staffs/staffs"), {
  ssr: false,
});

export default function StaffsClient() {
  return (
    <>
      <StaffsComponent />
    </>
  );
}

