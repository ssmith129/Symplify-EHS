import { Metadata } from "next";
import AppearanceSettingsClient from "./AppearanceSettingsClient";

export const metadata: Metadata = {
  title: "Appearence Settings | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function AppearanceSttings(){
    return(
        <>
            <AppearanceSettingsClient />
        </>
    )
}