import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "@/lib/types";
import { rejectQuote } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useRejectQuote = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: rejectQuote,
    onSuccess: (data, variable) => {
      toast.success("Quote successful rejected", toastOption);
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });
      queryClient.invalidateQueries({
        queryKey: ["quote info", variable?.quoteId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error rejecting quote", error);
      promiseErrorFunction(error);
    },
  });

  const handleRejectQuote = (quoteId: string) => {
    mutate({ quoteId });
  };

  return {
    isPending,
    handleRejectQuote,
  };
};
