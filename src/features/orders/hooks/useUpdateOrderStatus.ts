import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { updateOrderInfo } from "../api";
import { useUpdateOrderStatusState } from "./useUpdateOrderStatusState";

export const useUpdateOrderStatus = () => {
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

  const { mutate, isPending } = useMutation({
    mutationFn: updateOrderInfo,
    onSuccess: (data, variables) => {
      toast.success("Order status updated successfully!", toastOption);
      setIsOpen(false);
      setSelectedImageFile(null);
      setSelectedImage(null);
      queryClient.invalidateQueries({
        queryKey: ["all orders"],
      });
      queryClient.invalidateQueries({
        queryKey: ["order info", variables.orderId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  const handleUpdate = (id: string, status: string) => {
    if (["SHIPPED", "DELIVERED"].includes(status) && !selectedImageFile) {
      toast.error("Please upload a proof", toastOption);
      return;
    }
    mutate({ orderId: id, status, file: selectedImageFile || undefined });
  };

  return {
    handleUpdate,
    isPending,
    isOpen,
    setIsOpen,
    onSelectFile,
    handleImageDelete,
    selectedImage,
    selectedImageFile,
  };
};
