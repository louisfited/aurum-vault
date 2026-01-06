"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type WithdrawalStatus = "completed" | "pending" | "failed";

export type Withdrawal = {
  id: string;
  date: string; 
  amount: number;
  currency: "NGN";
  status: WithdrawalStatus;
  method: string;
  account: string;
  reference: string;
  fee: number;
  reason?: string; 
};

export const columns: ColumnDef<Withdrawal>[] = [
//   {
//     accessorKey: "id",
//     header: "ID",
//   },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const date = new Date(getValue<string>());
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "currency",
    header: "Currency",
  },
 {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      const bgColor =
        status === "completed"
          ? "bg-green-100 bg-green-600"
          : status === "pending"
          ? " bg-yellow-600"
          : status === "failed"
          ? " bg-red-600"
          : " bg-gray-600";

      return (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${bgColor}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "account",
    header: "Account",
  },
  {
    accessorKey: "reference",
    header: "Reference",
  },
  {
    accessorKey: "fee",
    header: "Fee",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
];