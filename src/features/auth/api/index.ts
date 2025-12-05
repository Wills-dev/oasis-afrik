import { axiosInstance } from "@/lib/axiosInstance";
import { LoginProps, SignUpProps } from "../types";

export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: SignUpProps) => {
  try {
    const { data } = await axiosInstance.post("/auth/sign-up", {
      email,
      firstName,
      lastName,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async ({ email, password }: LoginProps) => {
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

export const forgotPassword = async ({ email }: { email: string }) => {
  try {
    const { data } = await axiosInstance.post("/auth/forgot-password", {
      email,
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

export const logout = async () => {
  try {
    await axiosInstance.get("/auth/log-out");
  } catch (error) {
    throw error;
  }
};
