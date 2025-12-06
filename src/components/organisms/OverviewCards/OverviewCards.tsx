import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";

const OverviewCards = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <DashboardCard
        title="Product uploaded"
        value={`10`}
        icon="/assets/icons/solar_box.svg"
        percentage={6.3}
        percentageState="positive"
      />
      <DashboardCard
        title="Total orders"
        value={`180`}
        icon="/assets/icons/keyboard.svg"
        percentage={4.4}
        percentageState="negative"
      />
      <DashboardCard
        title="All quotes"
        value={`13`}
        icon="/assets/icons/send-sqaure-2.svg"
        percentage={1.2}
        percentageState="negative"
      />
      <DashboardCard
        title="Revenue"
        value={`₦1,800,000`}
        icon="/assets/icons/dollar-circle.svg"
        percentage={4.4}
        percentageState="positive"
      />
    </div>
  );
};

export default OverviewCards;
