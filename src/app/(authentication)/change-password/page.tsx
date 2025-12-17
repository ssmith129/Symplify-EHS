import { Metadata } from "next";
import ChangePasswordClient from "./ChangePasswordClient";

export const metadata: Metadata = {
  title: "Change password | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function ChangePassword(){
    return(
        <>
            <ChangePasswordClient />
        </>
    )
}