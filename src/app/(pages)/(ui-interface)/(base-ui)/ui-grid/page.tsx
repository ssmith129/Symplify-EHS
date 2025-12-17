import { Metadata } from "next";
import UiGridClient from "./UiGridClient";

export const metadata: Metadata = {
  title: "Grid | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIGrid(){
    return(
        <>
            <UiGridClient />
        </>
    )
}