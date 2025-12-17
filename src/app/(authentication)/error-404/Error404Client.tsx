"use client";

import dynamic from "next/dynamic";

const Error404Component = dynamic(() => import("@/components/authentication/error-404/error404"), {
  ssr: false,
});

export default function Error404Client() {
  return (
    <>
      <Error404Component />
    </>
  );
}

