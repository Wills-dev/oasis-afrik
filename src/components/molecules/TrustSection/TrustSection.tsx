import Container from "@/components/atoms/Container/Container";
import PageSectionDescription from "@/components/atoms/PageSectionDescription/PageSectionDescription";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";
import TrustTitle from "@/components/atoms/TrustTitle/TrustTitle";
import TrustBreakdown from "../TrustBreakdown/TrustBreakdown";

const TrustSection = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10">
          <div className="max-w-[870px] w-full flex flex-col justify-center items-center gap-2">
            <PageSubTitle title="Value preposition" />
            <TrustTitle />
            <div className="max-w-[642px] w-full">
              <PageSectionDescription description="OasisAfrik integrates digital innovation with Africa’s agricultural potential to create a streamlined, end-to-end trading ecosystem." />
            </div>
          </div>
          <TrustBreakdown />
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
