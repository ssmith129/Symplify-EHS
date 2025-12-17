import { Metadata } from "next";
import UiButtonsClient from "./UiButtonsClient";

export const metadata: Metadata = {
  title: "Buttons | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIButtons(){
    return(
        <>
            <UiButtonsClient />
        </>
    )
}