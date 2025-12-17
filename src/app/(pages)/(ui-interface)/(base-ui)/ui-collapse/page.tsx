import { Metadata } from "next";
import UiCollapseClient from "./UiCollapseClient";

export const metadata: Metadata = {
  title: "Collapse | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UICollapse(){
    return(
        <>
            <UiCollapseClient />
        </>
    )
}