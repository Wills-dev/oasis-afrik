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

export type BaseEntity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type QuoteProduct = {
  id: string;
  productId: string;
  name: string;
  mainImage: string;
  images: string[];
};

export type QuoteUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isCompanyVerified: boolean;
};

export type QuantityUnit = BaseEntity & {
  name: string;
  abbreviation: string;
};

export type LeadTimePeriod = BaseEntity & {
  name: string;
};

export type NoteAuthor = {
  id: string;
  firstName: string;
  lastName: string;
};

export type QuoteNote = {
  id: string;
  message: string;
  createdAt: string;
  author: NoteAuthor;
  address?: string | null;
  amount?: string | null;
  authorId?: string;
  effectiveAddress?: string;
  effectiveAmount?: string;
  effectiveQuantity?: string;
  quoteId?: string;
};

export type Quote = BaseEntity & {
  productId: string;
  buyerId: string;
  sellerId: string;
  amount: string;
  currency: string;
  quantity: string;
  quantityUnitId: string;
  address: string;
  minLeadTime: number | null;
  minLeadTimePeriodId: string | null;
  maxLeadTime: number | null;
  maxLeadTimePeriodId: string | null;
  status: number;
  statusLabel: string;
  product: QuoteProduct;
  buyer: QuoteUser;
  seller: QuoteUser;
  quantityUnit: QuantityUnit;
  minLeadTimePeriod: LeadTimePeriod;
  maxLeadTimePeriod: LeadTimePeriod;
  notes: QuoteNote[];
};
