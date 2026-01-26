"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import EditProductWrapper from "@/features/products/components/EditProductWrapper/EditProductWrapper";

const EditProductPage = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = use(params);

  return (
    <DashboardLayout title="Products">
      <EditProductWrapper productId={productId} />
    </DashboardLayout>
  );
};

export default EditProductPage;
