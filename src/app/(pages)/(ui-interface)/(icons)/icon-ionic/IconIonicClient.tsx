"use client";

import dynamic from "next/dynamic";

const IconIonicComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconIonic"), {
  ssr: false,
});

export default function IconIonicClient() {
  return (
    <>
      <IconIonicComponent />
    </>
  );
}

