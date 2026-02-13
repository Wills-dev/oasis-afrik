import { OrderStatus } from "../types";

export const getStatusConfig = (status: OrderStatus) => {
  switch (status) {
    case "SHIPPED":
      return {
        label: "Shipped",
        color: "text-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-200",
      };
    case "DELIVERED":
      return {
        label: "Delivered",
        color: "text-indigo-700",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
      };
    case "RECEIVED":
      return {
        label: "Received",
        color: "text-green-700",
        bg: "bg-green-50",
        border: "border-green-200",
      };
    default:
      return {
        label: status,
        color: "text-slate-700",
        bg: "bg-slate-50",
        border: "border-slate-200",
      };
  }
};
