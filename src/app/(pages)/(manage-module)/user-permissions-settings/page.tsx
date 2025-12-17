import { Metadata } from "next";
import UserPermissionsSettingsClient from "./UserPermissionsSettingsClient";

export const metadata: Metadata = {
  title: "User permissions Settings | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UserPermissionsSttings(){
    return(
        <>
            <UserPermissionsSettingsClient />
        </>
    )
}