import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getProducts = async ({
  currentPage,
  limit,
  search,
  filter,
}: fetchDataProps) => {
  try {
    const url = `/products?page=${currentPage}&limit=${limit}${
      filter ? `&filter=${filter}` : ""
    }${search ? `&search=${search}` : ""}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getProductInfo = async ({ productId }: { productId: string }) => {
  try {
    const url = `/products/${productId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
