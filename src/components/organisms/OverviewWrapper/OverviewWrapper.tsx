import Button from "@/components/atoms/Button/Button";
import DashboardTitle from "../../molecules/DashboardTitle/DashboardTitle";
import OverviewCards from "../OverviewCards/OverviewCards";
import OverviewChartWrapper from "../OverviewChartWrapper/OverviewChartWrapper";

const OverviewWrapper = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-6">
        <DashboardTitle
          title="Welcome back, Simeon!"
          description="Here is what is happening with your orders today"
        />
        <Button href="/products/new">Add a product</Button>
      </div>
      <div className="pt-10">
        <OverviewCards />
      </div>
      <OverviewChartWrapper />
    </div>
  );
};

export default OverviewWrapper;
