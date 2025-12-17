"use client";

import dynamic from "next/dynamic";

const AppointmentCalendarComponent = dynamic(() => import("@/components/appointments/appointmentCalendar"), {
  ssr: false,
});

export default function AppointmentCalendarClient(){
    return(
        <><AppointmentCalendarComponent/></>
    )
}