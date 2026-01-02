import Circle from "@/components/atoms/Circle/Circle";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import ValueCardWrapper from "@/components/atoms/ValueCardWrapper/ValueCardWrapper";

const OurValues = () => {
  return (
    <div className="py-24 flex flex-wrap justify-center gap-4">
      <ValueCardWrapper
        title="Our mission"
        description="To simplify Africa’s agro-commodity trade by providing a secure digital marketplace, verified sourcing, real-time logistics, and smart tools that help businesses scale with confidence."
        imgUrl="/assets/images/about-one.svg"
      />
      <div className="max-w-[431px] sm:h-[531px] h-fit w-full bg-[#0099331A] space-y-6 flex flex-col justify-between rounded-[20px] overflow-hidden">
        <div className="flex-1 w-full h-[285px] min-h-[200px] relative overflow-hidden">
          <Circle className="-top-5 -left-10" />
          <Circle className="-top-16 left-34 max-sm:hidden" />
          <Circle className="-top-5 -right-12" />
        </div>
        <div className="sm:p-6 p-4 space-y-2">
          <PageSubTitle
            title="Our Core Values"
            borderColor="border-green-600"
          />
          <p className="sm:text-2xl text-xl font-medium">Innovation</p>
          <p className="sm:text-2xl text-xl font-medium">Integrity</p>
          <p className="sm:text-2xl text-xl font-medium">Excellence</p>
        </div>
      </div>
      <ValueCardWrapper
        title="Our vision"
        description="To simplify Africa’s agro-commodity trade by providing a secure digital marketplace, verified sourcing, real-time logistics, and smart tools that help businesses scale with confidence."
        imgUrl="/assets/images/about-two.svg"
      />
    </div>
  );
};

export default OurValues;
