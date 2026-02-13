import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { OrderTableData } from "../../types";
import { convertDateFormat } from "@/lib/helpers";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const columnHelper = createColumnHelper<OrderTableData>();

export const Column = (isBuyer?: boolean) => [
  columnHelper.accessor("createdAt", {
    header: "Created",
    cell: ({ row }) => {
      const date: string = row.getValue("createdAt");
      const formatted = date ? convertDateFormat(date) : "";
      return <div>{formatted}</div>;
    },
  }),

  columnHelper.accessor((row) => row.product, {
    id: "product",
    header: "Product",
    cell: ({ getValue }) => {
      const product = getValue();

      return (
        <Link
          href={`/products/info/${product?.id}`}
          className="text-primary hover:underline font-medium cursor-pointer transition-all duration-300"
        >
          {product.name}
        </Link>
      );
    },
  }),

  ...(!isBuyer
    ? [
        columnHelper.accessor((row) => row.buyer, {
          id: "buyer",
          header: "Buyer",
          cell: ({ getValue }) => {
            const buyer = getValue();

            return (
              <div className="">
                {buyer.firstName} {buyer.lastName}
              </div>
            );
          },
        }),
      ]
    : []),

  ...(isBuyer
    ? [
        columnHelper.accessor((row) => row.seller, {
          id: "seller",
          header: "Seller",
          cell: ({ getValue }) => {
            const seller = getValue();

            return (
              <div className="">
                {seller.firstName} {seller.lastName}
              </div>
            );
          },
        }),
      ]
    : []),

  columnHelper.accessor("quantity", {
    header: "Quantity",
  }),

  columnHelper.accessor(
    (row) => ({
      amount: row.amount,
      currency: row.currency,
    }),
    {
      id: "amount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ getValue }) => {
        const { amount, currency } = getValue();

        const numericAmount = Number(amount);

        return (
          <div>
            {currency && getCurrencySign(currency)}
            {numericAmount.toLocaleString()}
          </div>
        );
      },
    },
  ),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as OrderTableData["status"];
      return (
        <StatusBubble
          status={status === "PENDING_PAYMENT" ? "PENDING" : status}
        />
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<OrderTableData, unknown>) => {
      const order = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/dashboard/orders/info/${order?.id}`}>
                View order info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/dashboard/products/info/${order?.productId}`}>
                View product info
              </Link>
            </DropdownMenuItem>
          </ColumnActionDropdown>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
