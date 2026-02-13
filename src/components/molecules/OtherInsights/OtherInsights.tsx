"use client";

import InsightCard from "@/components/atoms/InsightCard/InsightCard";
import InsightLoader from "@/components/atoms/skeletonLoader/InsightLoader";
// import SectionTitleWrapper from "@/components/atoms/SectionTitleWrapper/SectionTitleWrapper";
import { useGetInsights } from "@/features/insights/hooks/useGetInsights";
import { ArrowRightIcon } from "lucide-react";

const OtherInsights = () => {
  const limit = 50;

  const {
    insights,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInsights({ limit });

  return (
    <div className="space-y-10">
      {/* <div className="w-full flex justify-center items-center">
        <div className="max-w-[772.22px] w-full py-8 ">
          <SectionTitleWrapper>
            In-depth <span className="text-[#009933]">insights</span> from our
            trade experts{" "}
          </SectionTitleWrapper>
        </div>
      </div> */}
      <div className="flex flex-wrap gap-6">
        {isLoading ? (
          <InsightLoader />
        ) : (
          <>
            {insights.map((insight) => (
              <InsightCard
                date={insight?.createdAt}
                key={insight?.id}
                id={insight?.id}
                title={insight?.title}
                author={`${insight?.author?.firstName} ${insight?.author?.lastName}`}
              />
            ))}
          </>
        )}
      </div>
      {hasNextPage && (
        <div className="flex justify-center w-full">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-5 py-2.5 border rounded-full flex items-center gap-1 hover:bg-white duration-300 transition-all"
          >
            {isFetchingNextPage ? "Loading..." : "See More"}{" "}
            <ArrowRightIcon className="w-6 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default OtherInsights;
