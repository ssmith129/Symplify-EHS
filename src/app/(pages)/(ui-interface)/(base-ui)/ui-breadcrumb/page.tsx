import { Metadata } from "next";
import UiBreadcrumbClient from "./UiBreadcrumbClient";

export const metadata: Metadata = {
  title: "Breadcrumb | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIBreadcrumb(){
    return(
        <>
            <UiBreadcrumbClient />
        </>
    )
}