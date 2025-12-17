import { Metadata } from "next";
import UiUtilitiesClient from "./UiUtilitiesClient";

export const metadata: Metadata = {
  title: "Utilities | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIUtilities(){
    return(
        <>
            <UiUtilitiesClient />
        </>
    )
}