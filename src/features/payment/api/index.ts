import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getPayments = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/payments?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const paystackPayment = async ({ orderId }: { orderId: string }) => {
  try {
    const url = `/orders/${orderId}/initialize-payment`;
    const { data } = await axiosInstance.post(url);
    return data;
  } catch (error) {
    throw error;
  }
};
