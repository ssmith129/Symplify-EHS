import { Metadata } from "next";
import RequestClient from "./requestsClient";

export const metadata: Metadata = {
  title:
    "Requests | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};
export default function Requests(){
    return(
        <><RequestClient/></>
    )
}