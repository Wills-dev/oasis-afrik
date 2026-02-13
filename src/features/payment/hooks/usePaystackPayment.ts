import { useRouter } from "next/navigation";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { paystackPayment } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const usePaystackPayment = (quoteId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: paystackPayment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      queryClient.invalidateQueries({
        queryKey: ["quote info", quoteId],
      });
      router.push(data?.data?.authorization_url);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error accepting quote", error);
      promiseErrorFunction(error);
    },
  });

  const initializePaystackPayment = (orderId: string) => {
    mutate({ orderId });
  };

  return { isPending, initializePaystackPayment };
};
