import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy policy | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function PrivacyPolicy(){
    return(
        <>
            <PrivacyPolicyClient />
        </>
    )
}