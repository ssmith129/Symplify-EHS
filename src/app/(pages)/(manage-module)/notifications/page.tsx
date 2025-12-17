import { Metadata } from "next";
import NotificationsClient from "./NotificationsClient";

export const metadata: Metadata = {
  title: "Notification | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function Notifications(){
    return(
        <>
            <NotificationsClient />
        </>
    )
}