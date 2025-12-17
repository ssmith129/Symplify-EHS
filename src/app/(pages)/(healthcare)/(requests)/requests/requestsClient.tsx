"use client";
import dynamic from "next/dynamic";
const RequestsComponent = dynamic(() => import("@/components/requests/requests"), {
  ssr: false,
});

export default function RequestClient(){
    return(
        <><RequestsComponent/></>
    )
}