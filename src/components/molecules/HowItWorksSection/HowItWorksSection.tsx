import Image from "next/image";

import Container from "@/components/atoms/Container/Container";
import HowItWorksCardWrapper from "@/components/atoms/HowItWorksCardWrapper/HowItWorksCardWrapper";
import HowItWorksTitle from "@/components/atoms/HowItWorksTitle/HowItWorksTitle";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";

const HowItWorksSection = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10">
          <div className="max-w-[870px] w-full flex flex-col justify-center items-center gap-2">
            <PageSubTitle title="How it works" />
            <HowItWorksTitle />
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <HowItWorksCardWrapper
              title="Browse seller"
              description="Our trusted logistics partners pick up, ship, and track your order in real time."
              delay={0.3}
            >
              <div className="flex flex-col items-center p-4">
                <Image
                  src="/assets/images/secction-one.svg"
                  alt="how"
                  width={371}
                  height={104.56}
                  className=" w-full object-cover h-auto"
                />
                <Image
                  src="/assets/images/secction-one.svg"
                  alt="how"
                  width={371}
                  height={104.56}
                  className=" w-full object-cover sm:max-h-[104px] max-h-16 h-auto opacity-50"
                />
              </div>
            </HowItWorksCardWrapper>
            <HowItWorksCardWrapper
              title="Request Quote"
              description="Chat directly with sellers, negotiate pricing, and confirm order details."
              delay={0.4}
            >
              <div className="flex flex-col items-center p-4">
                <Image
                  src="/assets/images/quote.svg"
                  alt="how"
                  width={371}
                  height={104.56}
                  className=" w-full object-cover h-auto"
                />
              </div>
            </HowItWorksCardWrapper>
            <HowItWorksCardWrapper
              title="Make Secure Escrow Payment"
              description="Your payment is held safely until you receive the goods"
              delay={0.5}
            >
              <div className="flex flex-col items-center p-4 max-h-[247px] overflow-hidden">
                <Image
                  src="/assets/images/payment.svg"
                  alt="how"
                  width={371}
                  height={246.56}
                  className=" w-full object-cover h-full"
                />
              </div>
            </HowItWorksCardWrapper>
            <HowItWorksCardWrapper
              title="Logistics & Tracking"
              description="Our trusted logistics partners pick up, ship, and track your order in real time."
              delay={0.6}
            >
              <div className="flex flex-col items-center p-4 overflow-hidden">
                <Image
                  src="/assets/images/track.svg"
                  alt="how"
                  width={371}
                  height={246.56}
                  className=" w-full object-cover h-auto"
                />
              </div>
            </HowItWorksCardWrapper>
            <HowItWorksCardWrapper
              title="Confirm Delivery Release Payment"
              description="Once satisfied, payment is released to the seller automatically"
              delay={0.6}
            >
              <div className="flex flex-col items-center p-4 overflow-hidden">
                <Image
                  src="/assets/images/confirm.svg"
                  alt="how"
                  width={371}
                  height={246.56}
                  className=" w-full object-cover h-auto"
                />
              </div>
            </HowItWorksCardWrapper>
            <HowItWorksCardWrapper showJustImg delay={0.6} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
