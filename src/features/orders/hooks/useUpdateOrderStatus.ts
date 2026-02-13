import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { updateOrderInfo } from "../api";

export const useUpdateOrderStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateOrderInfo,
    onSuccess: (data, variables) => {
      toast.success("Order status updated successfully!", toastOption);
      setIsOpen(false);
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
    mutate({ orderId: id, status });
  };

  return {
    handleUpdate,
    isPending,
    isOpen,
    setIsOpen,
  };
};
