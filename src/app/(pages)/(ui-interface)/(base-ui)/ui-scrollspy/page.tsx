import { Metadata } from "next";
import UiScrollspyClient from "./UiScrollspyClient";

export const metadata: Metadata = {
  title: "Scrollspy | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIScrollspy(){
    return(
        <>
            <UiScrollspyClient />
        </>
    )
}