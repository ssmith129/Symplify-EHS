import { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Login | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function Login(){
    return(
        <><LoginClient/></>
    )
}