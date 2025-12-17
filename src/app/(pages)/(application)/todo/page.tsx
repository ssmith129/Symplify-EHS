import { Metadata } from "next";
import TodoClient from "./TodoClient";

export const metadata: Metadata = {
  title:
    "Todo | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function TodoPage() {
  return (
    <>
      <TodoClient />
    </>
  );
}
