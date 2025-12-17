import { Metadata } from "next";
import UiAvatarClient from "./UiAvatarClient";

export const metadata: Metadata = {
  title: "Avatar | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UIAvatar(){
    return(
        <>
            <UiAvatarClient />
        </>
    )
}