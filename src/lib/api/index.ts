import { axiosInstance } from "../axiosInstance";
import { ContactFormData } from "./../types/index";

export const contactUs = async ({
  name,
  subject,
  message,
  location,
  email,
  phone,
}: ContactFormData) => {
  try {
    const url = `/contact-us`;
    const { data } = await axiosInstance.post(url, {
      name,
      subject,
      message,
      location,
      email,
      phone,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
