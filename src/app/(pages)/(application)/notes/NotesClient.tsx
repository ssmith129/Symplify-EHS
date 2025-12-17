"use client";

import dynamic from "next/dynamic";

const NotesComponent = dynamic(() => import("@/components/application/notes"), {
  ssr: false,
});

export default function NotesClient() {
  return (
    <>
      <NotesComponent />
    </>
  );
}

