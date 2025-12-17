"use client";

import dynamic from "next/dynamic";

const AppointmentConsultationComponent = dynamic(() => import("@/components/appointments/appointmentsConsultation"), {
  ssr: false,
});

export default function AppointmentConsultationClient() {
  return (
    <>
      <AppointmentConsultationComponent />
    </>
  );
}

