import { Metadata } from "next";
import SecuritySettingsClient from "./SecuritySettingsClient";

export const metadata: Metadata = {
  title: "Security Settiings | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function SecuritySettings(){
    return(
        <>
            <SecuritySettingsClient />
        </>
    )
}