"use client";
import dynamic from "next/dynamic";
const PatientDetailsInsuranceComponent = dynamic(
  () => import("@/components/patients/patientDetailsInsurance"),
  {
    ssr: false,
  }
);

export default function PatientDetailsInsuranceClient() {
  return (
    <>
      <PatientDetailsInsuranceComponent />
    </>
  );
}
