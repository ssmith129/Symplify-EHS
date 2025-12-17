import { Metadata } from "next";
import SignUpClient from "./SignUpClient";

export const metadata: Metadata = {
  title: "Sign up | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function Sign(){
    return(
        <>
            <SignUpClient />
        </>
    )
}