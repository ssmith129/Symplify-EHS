import { Metadata } from "next";
import UiPlaceholdersClient from "./UiPlaceholdersClient";

export const metadata: Metadata = {
  title: "Placeholders | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIPlaceholders(){
    return(
        <>
            <UiPlaceholdersClient />
        </>
    )
}