import { Metadata } from "next";
import UiAccordionClient from "./UiAccordionClient";

export const metadata: Metadata = {
  title: "Accordion | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIAccordion(){
    return(
        <>
            <UiAccordionClient />
        </>
    )
}