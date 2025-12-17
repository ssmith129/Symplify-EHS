import { Metadata } from "next";
import UiDropdownsClient from "./UiDropdownsClient";

export const metadata: Metadata = {
  title: "Dropdowns | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIDropdowns(){
    return(
        <>
            <UiDropdownsClient />
        </>
    )
}