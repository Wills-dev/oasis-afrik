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
            <PageSectionDescription description="OasisAfrik ensures a trusted trading experience through secure escrow payments, verified sellers with authentic products, and integrated logistics with real-time tracking from pickup to delivery." />
          </div>
          <TrustBreakdown />
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
