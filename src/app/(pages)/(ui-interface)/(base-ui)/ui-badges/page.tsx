import { Metadata } from "next";
import UiBadgesClient from "./UiBadgesClient";

export const metadata: Metadata = {
  title: "Badges | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIBadges(){
    return(
        <>
            <UiBadgesClient />
        </>
    )
}