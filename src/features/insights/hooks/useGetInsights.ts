import { useInfiniteQuery } from "@tanstack/react-query";

import { getAllInsights } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetInsights = ({ limit = 50 }: { limit?: number }) => {
  const {
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
  } = useTableState();

  const {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["insights", submittedQuery],
    queryFn: ({ pageParam = 1 }) =>
      getAllInsights({
        currentPage: pageParam,
        limit,
        search: submittedQuery,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const allInsights = data?.pages.flatMap((page) => page.insights) ?? [];

  return {
    insights: allInsights,
    search,
    handleSearchChange,
    isLoading,
    handleClear,
    handleSearch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
    refetch,
  };
};
