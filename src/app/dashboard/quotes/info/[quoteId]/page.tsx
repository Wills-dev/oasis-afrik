"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import QuoteInfoWrapper from "@/features/quotes/components/QuoteInfoWrapper/QuoteInfoWrapper";

const QuoteInfoPage = ({
  params,
}: {
  params: Promise<{ quoteId: string }>;
}) => {
  const { quoteId } = use(params);

  return (
    <DashboardLayout title="Quote Info">
      <QuoteInfoWrapper quoteId={quoteId} />
    </DashboardLayout>
  );
};

export default QuoteInfoPage;
