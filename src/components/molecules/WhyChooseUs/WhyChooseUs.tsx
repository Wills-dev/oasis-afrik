import PageSectionDescription from "@/components/atoms/PageSectionDescription/PageSectionDescription";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import WhyChooseUseTitle from "@/components/atoms/WhyChooseUseTitle/WhyChooseUseTitle";
import ApproachCardWrapper from "../ApproachCardWrapper/ApproachCardWrapper";

const WhyChooseUs = () => {
  return (
    <section className="pb-24 space-y-10">
      <div className="max-w-[820px] w-full space-y-2">
        <PageSubTitle title="Why choose Oasisafrik" />
        <WhyChooseUseTitle />
        <div className="max-w-[680px] w-full">
          <PageSectionDescription
            className=""
            description="OasisAfrik integrates digital innovation with Africa’s agricultural potential to create a streamlined, end-to-end trading ecosystem."
          />
        </div>
      </div>
      <ApproachCardWrapper />
    </section>
  );
};

export default WhyChooseUs;
