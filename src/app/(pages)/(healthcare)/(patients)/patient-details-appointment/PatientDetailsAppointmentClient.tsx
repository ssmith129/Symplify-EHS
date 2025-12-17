"use client";

import dynamic from "next/dynamic";

const PatientDetailsAppointmentsComponent = dynamic(() => import("@/components/patients/patientDetailsAppointments"), {
  ssr: false,
});

export default function PatientDetailsAppointmentClient() {
  return (
    <>
      <PatientDetailsAppointmentsComponent />
    </>
  );
}

