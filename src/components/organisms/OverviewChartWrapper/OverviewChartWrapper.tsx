import ChartLoader from "@/components/atoms/skeletonLoader/ChartLoader";
import AreaChartContent from "@/components/molecules/AreaChartContent/AreaChartContent";
import BarChartContent from "@/components/molecules/BarChartContent/BarChartContent";

const OverviewChartWrapper = ({
  orderOverview,
  quoteOverview,
  isLoading,
  orderType,
  handleOrderTypeChange,
  isSeller,
}: {
  orderOverview: { period: string; count: number }[] | [];
  quoteOverview: { period: string; incoming: number; outgoing: number }[] | [];
  isLoading: boolean;
  orderType: string;
  handleOrderTypeChange: (type: string) => void;
  isSeller: boolean;
}) => {
  return (
    <div className="flex flex-wrap gap-6">
      {isLoading ? (
        <>
          <ChartLoader />
          <ChartLoader />
        </>
      ) : (
        <>
          <AreaChartContent
            data={orderOverview}
            orderType={orderType}
            handleOrderTypeChange={handleOrderTypeChange}
          />
          <BarChartContent data={quoteOverview} isSeller={isSeller} />
        </>
      )}
    </div>
  );
};

export default OverviewChartWrapper;
