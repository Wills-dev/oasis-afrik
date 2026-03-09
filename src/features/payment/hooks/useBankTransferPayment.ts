import { FormEvent } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { bankTransferProof } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { useUpdateOrderStatusState } from "@/features/orders/hooks/useUpdateOrderStatusState";

export const useBankTransferPayment = (quoteId: string) => {
  const {
    isOpen,
    setIsOpen,
    selectedImage,
    selectedImageFile,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFile,
    setSelectedImage,
  } = useUpdateOrderStatusState();

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: bankTransferProof,
    onSuccess: (data, variable) => {
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      queryClient.invalidateQueries({
        queryKey: ["order info", variable.orderId],
      });
      queryClient.invalidateQueries({
        queryKey: ["quote info", quoteId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error uploading bank transfer payment proof", error);
      promiseErrorFunction(error);
    },
  });

  const uploadBankTransferProof = (e: FormEvent, orderId: string) => {
    e.preventDefault();
    if (!selectedImageFile) {
      toast.error("Please provide payment proof!");
      return;
    }
    mutate({ orderId, file: selectedImageFile });
  };

  return {
    isSubmitting: isPending,
    isSuccess,
    uploadBankTransferProof,
    isOpen,
    setIsOpen,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFile,
    setSelectedImage,
    selectedImage,
    selectedImageFile,
  };
};
