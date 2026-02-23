"use client";

import { useSelector } from "react-redux";

import Button from "@/components/atoms/Button/Button";
import DashboardTitle from "../../molecules/DashboardTitle/DashboardTitle";
import OverviewCards from "../OverviewCards/OverviewCards";
import OverviewChartWrapper from "../OverviewChartWrapper/OverviewChartWrapper";
import WelcomeLoader from "@/components/atoms/Loader/WelcomeLoader/WelcomeLoader";

import { RootState } from "@/store";
import { useGetUserAnalytics } from "@/lib/hooks/useGetUserAnalytics";
import TimeFilterDropdown from "@/components/molecules/TimeFilterDropdown/TimeFilterDropdown";

const OverviewWrapper = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const {
    data,
    isLoading: analyticsLoading,
    period,
    handlePeriodChange,
    orderType,
    handleOrderTypeChange,
  } = useGetUserAnalytics();

  return (
    <div className="space-y-6 w-full">
      <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col w-full">
        {isLoading ? (
          <WelcomeLoader />
        ) : (
          <DashboardTitle
            title={`Welcome back, ${user?.firstName}!`}
            description="Here is what is happening with your orders today"
          />
        )}
        <Button href="/dashboard/products/new" width="w-fit">
          Add a product
        </Button>
      </div>
      <div className="pt-10">
        <OverviewCards
          isSeller={user?.isCompanyVerified || false}
          metrics={data?.metrics || null}
          analyticsLoading={analyticsLoading}
        />
      </div>
      <div className="flex justify-end">
        <TimeFilterDropdown value={period} onChange={handlePeriodChange} />
      </div>
      <OverviewChartWrapper
        orderOverview={data?.charts?.orderOverview || []}
        quoteOverview={data?.charts?.quoteOverview || []}
        isLoading={analyticsLoading}
        orderType={orderType}
        handleOrderTypeChange={handleOrderTypeChange}
        isSeller={user?.isCompanyVerified || false}
      />
    </div>
  );
};

export default OverviewWrapper;
