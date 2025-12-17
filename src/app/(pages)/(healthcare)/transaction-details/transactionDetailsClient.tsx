"use client";
import dynamic from "next/dynamic";
const TransactionDetailsComponent = dynamic(() => import("@/components/appointments/transactionDetails"), {
  ssr: false,
});

export default function TransactionDetailsClient(){
    return(
        <><TransactionDetailsComponent/></>
    )
}