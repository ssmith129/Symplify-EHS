import { Metadata } from "next";
import UiProgressClient from "./UiProgressClient";

export const metadata: Metadata = {
  title: "Progress | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIProgress(){
    return(
        <>
            <UiProgressClient />
        </>
    )
}