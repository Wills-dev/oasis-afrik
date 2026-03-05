import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteProductImage } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useDeleteProductImage = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteProductImage,
    onSuccess: (data, variables) => {
      toast.success("Product image deleted successfully.", toastOption);
      queryClient.invalidateQueries({
        queryKey: ["product info", variables?.productId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error deleting product", error);
      promiseErrorFunction(error);
    },
  });

  const handleDelete = (productId: string, imageIndex: number) => {
    mutate({ productId, imageIndex });
  };

  return {
    handleDelete,
    isDeleting: isPending,
  };
};
