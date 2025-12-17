import { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title:
    "Dashboard | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function Dashboard() {
  return (
    <>
      <DashboardClient />
    </>
  );
}
