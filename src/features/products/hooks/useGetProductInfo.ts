import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getProductInfo } from "../api";
import { ProductImageType } from "../types";
import { productInfo } from "../constants/dummy";

export const useGetProductInfo = (productId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["product info", productId],
    queryFn: () => getProductInfo({ productId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const [currentImage, setCurrentImage] = useState<ProductImageType | null>(
    null
  );

  useEffect(() => {
    if (productInfo?.productImages) {
      setCurrentImage(productInfo?.productImages[0]);
    }
  }, []);

  return {
    data,
    productInfo,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    currentImage,
    setCurrentImage,
  };
};
