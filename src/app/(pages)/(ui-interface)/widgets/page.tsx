import { Metadata } from "next";
import WidgetsClient from "./WidgetsClient";

export const metadata: Metadata = {
  title: "Widgets | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function WidgetsPage(){
    return(
        <>
            <WidgetsClient />
        </>
    )
}