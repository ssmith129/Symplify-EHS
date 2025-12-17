import { Metadata } from "next";
import ForgotPasswordClient from "./ForgotPasswordClient";

export const metadata: Metadata = {
  title: "Forgot password | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function ForgotPasswordPage(){
    return(
        <>
            <ForgotPasswordClient />
        </>
    )
}