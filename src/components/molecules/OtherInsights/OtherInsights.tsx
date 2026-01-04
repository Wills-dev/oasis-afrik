import InsightCard from "@/components/atoms/InsightCard/InsightCard";
import SectionTitleWrapper from "@/components/atoms/SectionTitleWrapper/SectionTitleWrapper";
import { ArrowRightIcon } from "lucide-react";

const OtherInsights = () => {
  return (
    <div className="space-y-10">
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[772.22px] w-full py-8 ">
          <SectionTitleWrapper>
            In-depth <span className="text-[#009933]">insights</span> from our
            trade experts{" "}
          </SectionTitleWrapper>
        </div>
      </div>
      <div className="flex flex-wrap gap-6">
        {["", "", "", "", "", "", "", ""].map((insight, index) => (
          <InsightCard
            key={index}
            id={index.toString()}
            imgUrl="/assets/dummy/prodImg3.jpg"
            title="Rising Demand for West African Cocoa in Global Markets"
            content="Growing sustainability standards and traceability requirements are reshaping how cocoa exporters operate. This insight explores global demand shifts and what exporters must prioritize to stay competitive."
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button className="px-5 py-2.5 border rounded-full flex items-center gap-1 hover:bg-white duration-300 transition-all">
          See more <ArrowRightIcon className="w-6 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OtherInsights;
