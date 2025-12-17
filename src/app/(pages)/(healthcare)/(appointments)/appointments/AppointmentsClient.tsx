"use client";

import dynamic from "next/dynamic";

const AppointmentComponent = dynamic(() => import("@/components/appointments/appointments"), {
  ssr: false,
});

export default function AppointmentsClient() {
  return (
    <>
      <AppointmentComponent />
    </>
  );
}

