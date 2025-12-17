"use client";

import dynamic from "next/dynamic";

const FileManagerComponent = dynamic(() => import("@/components/application/fileManager"), {
  ssr: false,
});

export default function FileManagerClient() {
  return (
    <>
      <FileManagerComponent />
    </>
  );
}

