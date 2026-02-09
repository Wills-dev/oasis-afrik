import { axiosInstance } from "@/lib/axiosInstance";

export const getAllInsights = async () => {
  try {
    const url = ``;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getInsightInfo = async ({ id }: { id: string }) => {
  try {
    const url = `/insights/${id}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
