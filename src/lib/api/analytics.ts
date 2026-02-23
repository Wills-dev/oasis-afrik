import { axiosInstance } from "../axiosInstance";

export const getAnalytics = async ({
  period,
  orderType,
}: {
  period: string;
  orderType: string;
}) => {
  try {
    const url = `/dashboard?orderType=${orderType}${period ? `&period=${period}` : ""}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
