import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getAnalytics } from "../api/analytics";

export const useGetUserAnalytics = () => {
  const [period, setPeriod] = useState("daily");
  const [orderType, setOrderType] = useState<string>("outgoing");

  const { data, isLoading, error } = useQuery({
    queryKey: ["analytics", period, orderType],
    queryFn: () => getAnalytics({ period, orderType }),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  const handlePeriodChange = (newPeriod: string) => {
    setPeriod(newPeriod);
  };

  const handleOrderTypeChange = (newOrderType: string) => {
    setOrderType(newOrderType);
  };

  return {
    error,
    data,
    isLoading,
    period,
    handlePeriodChange,
    orderType,
    handleOrderTypeChange,
  };
};
