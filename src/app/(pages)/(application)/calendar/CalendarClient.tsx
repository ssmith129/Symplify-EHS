"use client";

import dynamic from "next/dynamic";

const CalendarComponent = dynamic(() => import("@/components/application/calendar"), {
  ssr: false,
});

export default function CalendarClient() {
  return (
    <>
      <CalendarComponent />
    </>
  );
}

