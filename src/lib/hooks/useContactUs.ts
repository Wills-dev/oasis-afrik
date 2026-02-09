import { FormEvent, useState } from "react";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { ApiErrorResponse, ContactFormData } from "../types";
import { contactUs } from "../api";
import { promiseErrorFunction } from "../helpers/promiseError";
import { toastOption } from "../helpers/toast";

export const useContactUs = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    location: "",
    message: "",
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      location: "",
      message: "",
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: contactUs,
    onSuccess: () => {
      resetForm();
      setSubmitStatus("success");
      toast.success("Message submitted successfully.", toastOption);
    },
    onError: (error: ApiErrorResponse) => {
      setSubmitStatus("error");
      console.log("error logging signing up", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      return toast.error("Name is required", toastOption);
    } else if (!formData.email) {
      return toast.error("Email is required", toastOption);
    } else if (!formData.phone) {
      return toast.error("Phone number is required", toastOption);
    } else if (!formData.subject) {
      return toast.error("Subject is required", toastOption);
    } else if (formData?.message) {
      return toast.error("Message is required", toastOption);
    }
    mutate(formData);
  };

  return {
    handleSubmit,
    isPending,
    formData,
    submitStatus,
    handleInputChange,
  };
};
