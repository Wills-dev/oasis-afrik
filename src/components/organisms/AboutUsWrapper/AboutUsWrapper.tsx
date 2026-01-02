import AboutUsTitle from "@/components/atoms/AboutUsTitle/AboutUsTitle";
import Container from "@/components/atoms/Container/Container";
import HeroParagraph from "@/components/molecules/HeroParagraph/HeroParagraph";
import OurValues from "@/components/molecules/OurValues/OurValues";

const AboutUsWrapper = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[1135px] w-full py-8 ">
            <div className="flex flex-col justify-center items-center">
              <AboutUsTitle />
              <HeroParagraph paragraph="OasisAfrik is a Pan-African digital trade platform connecting African producers to global buyers through secure payments, verified sellers, integrated logistics, and real-time market insights." />
            </div>
          </div>
        </div>
        <OurValues />
      </Container>
    </div>
  );
};

export default AboutUsWrapper;
