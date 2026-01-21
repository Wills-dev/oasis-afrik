export type Quote = {
  productName: string;
  price: string;
  status: "replied" | "pending" | "accepted" | "rejected";
  updatedAt: string;
  description: string;
  buyer: {
    firstName: string;
    lastName: string;
  };

  seller: {
    firstName: string;
    lastName: string;
  };
  address: string;
  minLead: number;
  minLeadPeriod: "days" | "weeks" | "months";
  maxLead: number;
  maxLeadPeriod: "days" | "weeks" | "months";
  quantity: string;
  productImage?: string;
};

export interface QuotePayloadType {
  productId: string;
  amount: string;
  currency: string;
  quantity: string;
  quantityUnitId: string;
  address: string;
  minLeadTime?: string;
  minLeadTimePeriodId?: string;
  maxLeadTime?: string;
  maxLeadTimePeriodId?: string;
  description?: string;
}
