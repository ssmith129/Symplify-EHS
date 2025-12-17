import { Metadata } from "next";
import NotificationsSettingsClient from "./NotificationsSettingsClient";

export const metadata: Metadata = {
  title: "Notifications Settings | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function NotificationsSettings(){
    return(
        <>
            <NotificationsSettingsClient />
        </>
    )
}