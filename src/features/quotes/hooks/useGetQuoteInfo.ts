import { useQuery } from "@tanstack/react-query";

import { getQuoteInfo } from "../api";
import { quoteInfo } from "../constants/dummy";

export const useGetQuoteInfo = (quoteId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["quote info", quoteId],
    queryFn: () => getQuoteInfo({ quoteId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    quoteInfo,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
  };
};
