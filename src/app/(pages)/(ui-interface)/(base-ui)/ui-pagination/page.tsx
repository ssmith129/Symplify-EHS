import { Metadata } from "next";
import UiPaginationClient from "./UiPaginationClient";

export const metadata: Metadata = {
  title: "Pagination | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIPagination(){
    return(
        <>
            <UiPaginationClient />
        </>
    )
}