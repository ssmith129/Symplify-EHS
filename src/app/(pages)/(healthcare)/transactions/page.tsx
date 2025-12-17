import { Metadata } from "next";
import TransactionsClient from "./transactionsClient";
export const metadata: Metadata = {
  title:
    "Transactions | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};
export default function Transaction() {
  return (
    <>
      <TransactionsClient />
    </>
  );
}
