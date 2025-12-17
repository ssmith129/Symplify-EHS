import { Metadata } from "next";
import UiCardsClient from "./UiCardsClient";

export const metadata: Metadata = {
  title: "Cards | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UICards(){
    return(
        <>
            <UiCardsClient />
        </>
    )
}