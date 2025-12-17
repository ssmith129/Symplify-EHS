import { Metadata } from "next";
import KanbanViewClient from "./KanbanViewClient";

export const metadata: Metadata = {
  title:
    "Kanban View | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function KanbanViewPage() {
  return (
    <>
      <KanbanViewClient />
    </>
  );
}
