import { Metadata } from "next";
import TransactionDetailsClient from "./transactionDetailsClient";
export const metadata: Metadata = {
  title:
    "Transaction Details | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};
export default function TransactionDetails() {
  return (
    <>
      <TransactionDetailsClient />
    </>
  );
}
