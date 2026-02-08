import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { paystackPayment } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { useRouter } from "next/navigation";

export const usePaystackPayment = (quoteId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: paystackPayment,
    onSuccess: (data) => {
      toast.success("Payment successful accepted", toastOption);
      queryClient.invalidateQueries({
        queryKey: ["quotes"],
      });
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      queryClient.invalidateQueries({
        queryKey: ["quote info", quoteId],
      });
      console.log(
        "data?.data?.authorization_url",
        data?.data?.authorization_url,
      );
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
