"use client";

import dynamic from "next/dynamic";
const TransactionsComponent = dynamic(() => import("@/components/appointments/transactions"), {
  ssr: false,
});

export default function TransactionsClient(){
    return(
        <><TransactionsComponent/></>
    )
}