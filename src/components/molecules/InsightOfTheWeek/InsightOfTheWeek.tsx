import InsightOfTheWeekTitle from "@/components/atoms/InsightOfTheWeekTitle/InsightOfTheWeekTitle";
import PageSectionDescription from "@/components/atoms/PageSectionDescription/PageSectionDescription";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import Image from "next/image";

const InsightOfTheWeek = () => {
  return (
    <div className="flex flex-wrap gap-8 py-24">
      <div className="flex-1 space-y-6">
        <PageSubTitle title="Feature of the week" />
        <InsightOfTheWeekTitle />
        <PageSectionDescription
          className=""
          description="OasisAfrik ensures a trusted trading experience through secure escrow payments, verified sellers with authentic products, and integrated logistics with real-time tracking from pickup to delivery."
        />
      </div>
      <div className="max-w-[478px] w-full min-w-[280px] sm:max-h-[460px] sm:h-full h-[275px] ">
        <Image
          src="/assets/images/how-img.jpg"
          alt="feature"
          width={478}
          height={460}
          className="w-full h-full object-cover rounded-[27px]"
        />
      </div>
    </div>
  );
};

export default InsightOfTheWeek;
