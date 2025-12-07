import DashboardCard from "@/components/molecules/DashboardCard/DashboardCard";

const ProductCards = () => {
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
        title="Pending Products"
        value={`1`}
        icon="/assets/icons/keyboard.svg"
        percentage={4.4}
        percentageState="negative"
      />
      <DashboardCard
        title="Approved"
        value={`9`}
        icon="/assets/icons/send-sqaure-2.svg"
        percentage={1.2}
        percentageState="positive"
      />
      <DashboardCard
        title="Unavailable Products"
        value={`5`}
        icon="/assets/icons/keyboard.svg"
        percentage={4}
        percentageState="negative"
      />
    </div>
  );
};

export default ProductCards;
