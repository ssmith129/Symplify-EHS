import { Metadata } from "next";
import UiAlertsClient from "./UiAlertsClient";

export const metadata: Metadata = {
  title: "Alerts | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIAlerts(){
    return(
        <>
            <UiAlertsClient />
        </>
    )
}