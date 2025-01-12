import React from "react";
import TableCombo from "@/components/table-price/TableCombo";
import TableOptionals from "@/components/table-price/TableOptionals";
export default function TablePrice() {
  return (
    <div className="flex flex-row justify-center items-center gap-10 w-full min-h-screen bg-gradient-to-tr from-[#253e72] via-[#4DA1A9] to-[#1c91b3]">
      <TableCombo />
      <TableOptionals />
    </div>
  );
}
