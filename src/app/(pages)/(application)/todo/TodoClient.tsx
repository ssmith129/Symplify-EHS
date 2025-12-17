"use client";

import dynamic from "next/dynamic";

const TodoComponent = dynamic(() => import("@/components/application/todo"), {
  ssr: false,
});

export default function TodoClient() {
  return (
    <>
      <TodoComponent />
    </>
  );
}

