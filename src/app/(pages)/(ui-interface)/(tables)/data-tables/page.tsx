import { Metadata } from "next";
import DataTablesClient from "./DataTablesClient";

export const metadata: Metadata = {
  title: "Data Table | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function DataTablesPage(){
    return(
        <>
            <DataTablesClient />
        </>
    )
}