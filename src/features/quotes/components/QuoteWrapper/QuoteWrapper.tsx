"use client";

import { useState } from "react";

import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import PageSelector from "@/components/molecules/PageSelector/PageSelector";
import { pageSelectors } from "../../constants";
import AllQuotesWrapper from "../AllQuotesWrapper/AllQuotesWrapper";

const QuoteWrapper = () => {
  const [selectPage, setSelectPage] = useState("Sent");

  return (
    <div className="space-y-6">
      <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
        <DashboardTitle
          title="Quote"
          description="Manage quote requests and negotiations"
        />
      </div>
      <PageSelector
        selectPage={selectPage}
        setSelectPage={setSelectPage}
        options={pageSelectors}
      />
      <AllQuotesWrapper />
    </div>
  );
};

export default QuoteWrapper;
