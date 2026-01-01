"use client";

import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import SolutionTitle from "../SolutionTitle/SolutionTitle";
import SolutionCardWrapper from "@/components/atoms/SolutionCardWrapper/SolutionCardWrapper";
import { buyerSolutions, producerSolutions } from "@/lib/constants/solutions";
import Container from "@/components/atoms/Container/Container";

const SolutionSection = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10">
          <div className="max-w-[706px] w-full flex flex-col justify-center items-center gap-2">
            <PageSubTitle title="Services" />
            <SolutionTitle />
          </div>
          <div className="flex flex-wrap gap-6 w-full">
            <SolutionCardWrapper
              bgUrl="/assets/images/solution-bg.jpg"
              title="For Producers & Processors"
              breakdown={producerSolutions}
            />
            <SolutionCardWrapper
              mapImg="/assets/images/World.svg"
              title="For Investors & Global Buyers"
              breakdown={buyerSolutions}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;
