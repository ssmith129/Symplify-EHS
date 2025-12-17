"use client";

import dynamic from "next/dynamic";

const Error500Component = dynamic(() => import("@/components/authentication/error-500/error500"), {
  ssr: false,
});

export default function Error500Client() {
  return (
    <>
      <Error500Component />
    </>
  );
}

