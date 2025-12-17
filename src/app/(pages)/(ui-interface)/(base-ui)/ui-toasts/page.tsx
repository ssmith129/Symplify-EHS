import { Metadata } from "next";
import UiToastsClient from "./UiToastsClient";

export const metadata: Metadata = {
  title: "Toasts | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIToasts(){
    return(
        <>
            <UiToastsClient />
        </>
    )
}