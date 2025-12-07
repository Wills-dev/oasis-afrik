export type ProductImageType = {
  id: string;
  imgUrl: string;
};

export type ProductType = {
  id: string;
  productName: string;
  createdAt: string;
  status: "pending" | "approved" | "unavailable" | "declined";
  amount: string;
  country: string;
  minOrder: string;
  quantity: string;
  minLead: number;
  minLeadPeriod: string;
  maxLead: number;
  maxLeadPeriod: string;
  description: string;
  productImages: ProductImageType[];
  category: string;
  reviews?: number;
  rating?: number;
};
