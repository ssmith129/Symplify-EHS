"use client";

import dynamic from "next/dynamic";

const KanbanViewComponent = dynamic(() => import("@/components/application/kanbanView"), {
  ssr: false,
});

export default function KanbanViewClient() {
  return (
    <>
      <KanbanViewComponent />
    </>
  );
}

