import { Metadata } from "next";
import UiButtonsGroupClient from "./UiButtonsGroupClient";

export const metadata: Metadata = {
  title: "Buttons Group | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIButtonsGroup(){
    return(
        <>
            <UiButtonsGroupClient />
        </>
    )
}