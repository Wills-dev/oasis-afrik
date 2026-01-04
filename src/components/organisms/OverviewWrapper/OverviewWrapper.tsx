"use client";

import { useSelector } from "react-redux";

import Button from "@/components/atoms/Button/Button";
import DashboardTitle from "../../molecules/DashboardTitle/DashboardTitle";
import OverviewCards from "../OverviewCards/OverviewCards";
import OverviewChartWrapper from "../OverviewChartWrapper/OverviewChartWrapper";
import WelcomeLoader from "@/components/atoms/Loader/WelcomeLoader/WelcomeLoader";

import { RootState } from "@/store";

const OverviewWrapper = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

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
        <OverviewCards />
      </div>
      <OverviewChartWrapper />
    </div>
  );
};

export default OverviewWrapper;
