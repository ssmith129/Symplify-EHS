"use client";

import dynamic from "next/dynamic";

const IconPe7Component = dynamic(() => import("@/components/ui-intrerface/icons/iconPe7"), {
  ssr: false,
});

export default function IconPe7Client() {
  return (
    <>
      <IconPe7Component />
    </>
  );
}

