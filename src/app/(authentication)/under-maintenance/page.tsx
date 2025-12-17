import { Metadata } from "next";
import UnderMaintenanceClient from "./UnderMaintenanceClient";

export const metadata: Metadata = {
  title: "Under Maintenance | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function underMaintenance(){
    return(
        <>
            <UnderMaintenanceClient />
        </>
    )
}