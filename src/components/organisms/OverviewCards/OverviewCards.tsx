import SummaryCardWrapper from "@/components/atoms/SummaryCardWrapper/SummaryCardWrapper";
import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";
import { numberWithCommas } from "@/lib/helpers";

export type OrderStatus =
  | "CANCELLED"
  | "DELIVERED"
  | "PAID"
  | "PENDING_PAYMENT"
  | "PROCESSING"
  | "RECEIVED"
  | "SETTLED"
  | "SHIPPED";

export interface OrderStatusSummary {
  CANCELLED: number;
  DELIVERED: number;
  PAID: number;
  PENDING_PAYMENT: number;
  PROCESSING: number;
  RECEIVED: number;
  SETTLED: number;
  SHIPPED: number;
}

export interface PendingQuotes {
  incoming: number;
  outgoing: number;
}

export interface Metrics {
  orderStatusSummary: OrderStatusSummary;
  pendingOrders: number;
  pendingQuotes: PendingQuotes;
  productsUploaded: number;
  revenueInNaira: string;
  totalOrders: number;
  totalQuotes: number;
}

const OverviewCards = ({
  isSeller,
  metrics,
  analyticsLoading,
}: {
  isSeller: boolean;
  metrics: Metrics | null;
  analyticsLoading: boolean;
}) => {
  return (
    <SummaryCardWrapper loading={analyticsLoading}>
      {isSeller && (
        <DashboardCard
          title="Product uploaded"
          value={
            metrics?.productsUploaded
              ? numberWithCommas(metrics.productsUploaded)
              : "0"
          }
          icon="/assets/icons/solar_box.svg"
        />
      )}
      {isSeller && (
        <DashboardCard
          title="Total received orders"
          value={
            metrics?.totalOrders ? numberWithCommas(metrics.totalOrders) : "0"
          }
          icon="/assets/icons/dollar-circle.svg"
        />
      )}
      {isSeller && (
        <DashboardCard
          title="Total received pending orders"
          value={
            metrics?.pendingOrders
              ? numberWithCommas(metrics.pendingOrders)
              : "0"
          }
          icon="/assets/icons/keyboard.svg"
        />
      )}
      <DashboardCard
        title="Total pending sent quotes"
        value={
          metrics?.pendingQuotes?.outgoing
            ? numberWithCommas(metrics.pendingQuotes.outgoing)
            : "0"
        }
        icon="/assets/icons/send-sqaure-2.svg"
      />
      {isSeller && (
        <DashboardCard
          title="All received quotes"
          value={
            metrics?.totalQuotes ? numberWithCommas(metrics.totalQuotes) : "0"
          }
          icon="/assets/icons/dollar-circle.svg"
        />
      )}
    </SummaryCardWrapper>
  );
};

export default OverviewCards;
