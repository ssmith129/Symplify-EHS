import { Metadata } from "next";
import ChartApexClient from "./ChartApexClient";

export const metadata: Metadata = {
  title: "Apex Chart | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function ApexChart(){
    return(
        <>
            <ChartApexClient />
        </>
    )
}