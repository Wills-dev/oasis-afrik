import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { convertDateFormat, numberWithCommas } from "@/lib/helpers";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ProductType } from "../../types";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const columnHelper = createColumnHelper();

export const Column = [
  columnHelper.accessor("createdAt", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: Date = row.getValue("createdAt");
      const formatted = date ? convertDateFormat(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),
  columnHelper.accessor("id", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ProductID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("productName", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("country", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("amount", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const price = row.getValue("amount");
    //   const currency = (row?.original as { currency?: string })?.currency;

    //   return (
    //     <p className="">
    //       {currency && getCurrencySign(currency)}
    //       {price ? numberWithCommas(Number(price)) : "0.00"}
    //     </p>
    //   );
    // },
  }),
  columnHelper.accessor("minOrder", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Minimum Order
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const discountedPrice = row.getValue("discountedPrice");
    //   const currency = (row?.original as { currency?: string })?.currency;

    //   return (
    //     <p className="">
    //       {currency && getCurrencySign(currency)}
    //       {discountedPrice ? numberWithCommas(Number(discountedPrice)) : "0.00"}
    //     </p>
    //   );
    // },
  }),
  columnHelper.accessor("quantity", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Availability Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const availableQuantity = row.getValue("availableQuantity");
    //   return (
    //     <p className="">
    //       {availableQuantity ? numberWithCommas(Number(availableQuantity)) : 0}
    //     </p>
    //   );
    // },
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <StatusBubble status={status} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<ProductType, unknown>) => {
      const product = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/products/info/${product?.id}`}>View info</Link>
            </DropdownMenuItem>
          </ColumnActionDropdown>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
