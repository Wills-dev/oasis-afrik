import Container from "@/components/atoms/Container/Container";
import InsightsTitle from "@/components/atoms/InsightsTitle/InsightsTitle";
import HeroParagraph from "@/components/molecules/HeroParagraph/HeroParagraph";
import InsightOfTheWeek from "@/components/molecules/InsightOfTheWeek/InsightOfTheWeek";
import OtherInsights from "@/components/molecules/OtherInsights/OtherInsights";

const InsightsWrapper = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="space-y-10">
          <div className="w-full flex justify-center items-center">
            <div className="max-w-[950px] w-full">
              <div className="max-sm:space-y-2">
                <InsightsTitle />
                <div className="max-w-[85s9px] w-full">
                  <HeroParagraph paragraph="Access trusted data, expert reports, market trends, and real case studies designed to guide producers, buyers, and investors across the continent." />
                </div>
              </div>
            </div>
          </div>
          <InsightOfTheWeek />
          <OtherInsights />
        </div>
      </Container>
    </div>
  );
};

export default InsightsWrapper;
