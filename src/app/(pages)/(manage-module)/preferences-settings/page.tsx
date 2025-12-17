import { Metadata } from "next";
import PreferencesSettingsClient from "./PreferencesSettingsClient";

export const metadata: Metadata = {
  title: "Notification | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function PreferencesSttings(){
    return(
        <>
            <PreferencesSettingsClient />
        </>
    )
}