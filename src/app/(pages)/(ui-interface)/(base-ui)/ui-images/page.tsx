import { Metadata } from "next";
import UiImagesClient from "./UiImagesClient";

export const metadata: Metadata = {
  title: "Images | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIGrid(){
    return(
        <>
            <UiImagesClient />
        </>
    )
}