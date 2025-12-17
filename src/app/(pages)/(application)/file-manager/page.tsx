import { Metadata } from "next";
import FileManagerClient from "./FileManagerClient";

export const metadata: Metadata = {
  title:
    "File Manager | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function KanbanViewPage() {
  return (
    <>
      <FileManagerClient />
    </>
  );
}
