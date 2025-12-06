import AreaChartContent from "@/components/molecules/AreaChartContent/AreaChartContent";
import BarChartContent from "@/components/molecules/BarChartContent/BarChartContent";

const OverviewChartWrapper = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <AreaChartContent />
      <BarChartContent />
    </div>
  );
};

export default OverviewChartWrapper;
