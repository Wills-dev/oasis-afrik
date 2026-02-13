import { ProductData, User } from "@/features/auth/types";
import { ProductType } from "@/features/products/types";
import { Quote } from "@/features/quotes/types";

export type Order = {
  id: string;
  createdAt: string;
  productName: string;
  productId: string;
  quantity: number;
  price: string;
  amount: string;
  status:
    | "pending"
    | "processing"
    | "declined"
    | "in_transit"
    | "delivered"
    | "received";
  minLead: number;
  maxLead: number;
  minLeadPeriod: "days" | "weeks" | "months";
  maxLeadPeriod: "days" | "weeks" | "months";
};

export type OrderStatus =
  | "PENDING_PAYMENT"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "RECEIVED"
  | "CANCELLED";

export type OrderInfo = {
  id: string;
  createdAt: string;
  status:
    | "pending"
    | "processing"
    | "declined"
    | "in_transit"
    | "delivered"
    | "received";
  product: ProductType;
  seller: User;
  buyer: User;
};

export type OrderTableData = {
  id: string;
  address: string;
  amount: string;
  amountChargedNgn: string | null;
  buyerId: string;
  sellerId: string;
  productId: string;
  quantity: string;
  quantityUnitId: string;
  quoteId: string;
  currency: string;
  currencyId: string | null;
  paystackReference: string | null;
  paidAt: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  quantityUnit?: {
    abbreviation: string;
    id: string;
    name: string;
  };
  buyer: User;
  seller: User;
  product: ProductData;
  quote: Quote;
};
