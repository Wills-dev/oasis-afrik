import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { QuotePayloadType } from "../types";
import { removeCommas } from "@/lib/helpers/removeCommas";

export const getQuotes = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/quotes?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getQuoteInfo = async ({ quoteId }: { quoteId: string }) => {
  try {
    const url = `/quotes/${quoteId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const requestQuote = async ({
  productId,
  amount,
  currency,
  quantity,
  quantityUnitId,
  address,
  minLeadTime,
  minLeadTimePeriodId,
  maxLeadTime,
  maxLeadTimePeriodId,
  description,
}: QuotePayloadType) => {
  try {
    const payload: {
      productId: string;
      amount: string;
      currency: string;
      quantity: number;
      quantityUnitId: string;
      address: string;
      minLeadTime?: number;
      minLeadTimePeriodId?: string;
      maxLeadTime?: number;
      maxLeadTimePeriodId?: string;
      description?: string;
    } = {
      productId,
      amount: removeCommas(amount),
      currency,
      quantity: Number(removeCommas(quantity)),
      quantityUnitId,
      address,
    };
    if (minLeadTime) payload.minLeadTime = Number(minLeadTime);
    if (minLeadTimePeriodId) payload.minLeadTimePeriodId = minLeadTimePeriodId;
    if (maxLeadTime) payload.maxLeadTime = Number(maxLeadTime);
    if (maxLeadTimePeriodId) payload.maxLeadTimePeriodId = maxLeadTimePeriodId;
    if (description) payload.description = description;
    const { data } = await axiosInstance.post(`/quotes/request`, payload);

    return data;
  } catch (error) {
    throw error;
  }
};
