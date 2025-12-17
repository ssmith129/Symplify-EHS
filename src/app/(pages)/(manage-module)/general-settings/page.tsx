import { Metadata } from "next";
import GeneralSettingsClient from "./GeneralSettingsClient";

export const metadata: Metadata = {
  title: "General Settiings | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function GeneralSettings(){
    return(
        <>
            <GeneralSettingsClient />
        </>
    )
}