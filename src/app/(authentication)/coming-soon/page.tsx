import { Metadata } from "next";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
  title: "Coming soon | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function StarterPage(){
    return(
        <>
            <ComingSoonClient />
        </>
    )
}