import { Metadata } from "next";
import PlansBillingsSettingsClient from "./PlansBillingsSettingsClient";

export const metadata: Metadata = {
  title: "Plans and Billings Settings | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function PlansAndBillingsSettings(){
    return(
        <>
            <PlansBillingsSettingsClient />
        </>
    )
}