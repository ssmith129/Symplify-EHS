import { Metadata } from "next";
import UiLinksClient from "./UiLinksClient";

export const metadata: Metadata = {
  title: "Links | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UILinks(){
    return(
        <>
            <UiLinksClient />
        </>
    )
}