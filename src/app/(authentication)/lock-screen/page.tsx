import { Metadata } from "next";
import LockScreenClient from "./LockScreenClient";

export const metadata: Metadata = {
  title: "Lock Screen | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function LockScreen(){
    return(
        <>
            <LockScreenClient />
        </>
    )
}