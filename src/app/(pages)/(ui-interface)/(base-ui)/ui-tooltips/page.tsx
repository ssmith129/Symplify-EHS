import { Metadata } from "next";
import UiTooltipsClient from "./UiTooltipsClient";

export const metadata: Metadata = {
  title: "Tooltips | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UITooltips(){
    return(
        <>
            <UiTooltipsClient />
        </>
    )
}