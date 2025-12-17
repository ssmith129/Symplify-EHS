"use client";
import dynamic from "next/dynamic";

const PatientSearchComponent = dynamic(() => import("@/components/patients/patientSearch"), {
  ssr: false,
});

export default function PaitentSearchClient(){
    return(
        <><PatientSearchComponent/></>
    )
}