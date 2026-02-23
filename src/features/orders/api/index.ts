import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getOrders = async ({
  currentPage,
  limit,
  search,
  filter,
  tab,
}: fetchDataProps) => {
  try {
    const url = `/orders?page=${currentPage}&limit=${limit}${
      filter ? `&status=${filter}` : ""
    }${search ? `&search=${search}` : ""}${tab === "Incoming" ? `&type=seller` : "&type=buyer"}`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrderInfo = async ({ orderId }: { orderId: string }) => {
  try {
    const url = `/orders/${orderId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const updateOrderInfo = async ({
  orderId,
  status,
  file,
}: {
  orderId: string;
  status: string;
  file?: File;
}) => {
  try {
    const url = `/orders/${orderId}/status`;

    if (file) {
      const formData = new FormData();

      formData.append("status", status);
      formData.append("file", file);

      const { data } = await axiosInstance.patch(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data?.data;
    } else {
      const { data } = await axiosInstance.patch(url, { status });
      return data?.data;
    }
  } catch (error) {
    throw error;
  }
};
