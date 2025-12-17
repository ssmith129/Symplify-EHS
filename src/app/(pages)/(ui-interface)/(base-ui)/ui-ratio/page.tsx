import { Metadata } from "next";
import UiRatioClient from "./UiRatioClient";

export const metadata: Metadata = {
  title: "Ratio | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIDropdowns(){
    return(
        <>
            <UiRatioClient />
        </>
    )
}