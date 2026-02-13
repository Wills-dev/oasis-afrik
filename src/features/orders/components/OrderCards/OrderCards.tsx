import SummaryCardWrapper from "@/components/atoms/SummaryCardWrapper/SummaryCardWrapper";
import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";
import { numberWithCommas } from "@/lib/helpers";

const OrderCards = ({
  total,
  pending,
  received,
  paid,
  isLoading,
  setFilter,
}: {
  total: number;
  pending: number;
  received: number;
  paid: number;
  isLoading: boolean;
  setFilter: (item: string) => void;
}) => {
  return (
    <SummaryCardWrapper loading={isLoading}>
      <DashboardCard
        title="All Orders"
        value={total ? numberWithCommas(total) : "0"}
        icon="/assets/icons/solar_box.svg"
        percentage={6.3}
        percentageState="positive"
        onClick={() => setFilter("")}
      />
      <DashboardCard
        title="Pending Orders"
        value={pending ? numberWithCommas(pending) : "0"}
        icon="/assets/icons/keyboard.svg"
        percentage={4.4}
        percentageState="negative"
        onClick={() => setFilter("PENDING")}
      />
      <DashboardCard
        title="Processing Orders"
        value={paid ? numberWithCommas(paid) : "0"}
        icon="/assets/icons/send-sqaure-2.svg"
        percentage={1.2}
        percentageState="positive"
        onClick={() => setFilter("PAID")}
      />
      <DashboardCard
        title="Completed Orders"
        value={received ? numberWithCommas(received) : "0"}
        icon="/assets/icons/keyboard.svg"
        percentage={4}
        percentageState="negative"
        onClick={() => setFilter("RECEIVED")}
      />
    </SummaryCardWrapper>
  );
};

export default OrderCards;
