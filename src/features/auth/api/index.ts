import { axiosInstance } from "@/lib/axiosInstance";
import { LoginProps } from "../types";

export const loginAdmin = async ({ email, password }: LoginProps) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get("/auth/current-user");
    return data;
  } catch (error) {
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    await axiosInstance.get("/auth/log-out");
  } catch (error) {
    throw error;
  }
};
