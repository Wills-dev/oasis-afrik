import { useQuery } from "@tanstack/react-query";
import { getAllInsights } from "../api";

export const useGetInsights = () => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["insights"],
    queryFn: getAllInsights,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
  };
};
