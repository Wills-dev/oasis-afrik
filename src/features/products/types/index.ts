export type ProductImageType = {
  id: string;
  imgUrl: string;
};

export type ProductType = {
  id: string;
  productName: string;
  createdAt: string;
  status: "pending" | "approved" | "unavailable" | "declined";
  price: string;
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

export type ProductFormData = {
  productName: string;
  category: string;
  quantity: string;
  unit: string;
  country: string;
  price: string;
  currency: string;
  minOrder: string;
  minLead: string;
  minLeadPeriod: string;
  maxLead: string;
  maxLeadPeriod: string;
  description: string;
  minOrderUnit: string;
};
