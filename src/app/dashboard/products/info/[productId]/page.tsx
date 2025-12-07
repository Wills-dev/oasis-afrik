"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ProductInfoWrapper from "@/features/products/components/ProductInfoWrapper/ProductInfoWrapper";

const ProductInfoPage = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = use(params);

  return (
    <DashboardLayout title="Products">
      <ProductInfoWrapper productId={productId} />
    </DashboardLayout>
  );
};

export default ProductInfoPage;
