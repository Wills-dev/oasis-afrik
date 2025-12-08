"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import OrderInfoWrapper from "@/features/orders/components/OrderInfoWrapper/OrderInfoWrapper";

const OrderInfoPage = ({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) => {
  const { orderId } = use(params);

  return (
    <DashboardLayout title="Order Info">
      <OrderInfoWrapper orderId={orderId} />
    </DashboardLayout>
  );
};

export default OrderInfoPage;
