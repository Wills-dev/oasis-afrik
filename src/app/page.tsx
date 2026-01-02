import HeroSection from "@/components/molecules/HeroSection/HeroSection";
import HowItWorksSection from "@/components/molecules/HowItWorksSection/HowItWorksSection";
import ProductionSection from "@/components/molecules/ProductionSection/ProductionSection";
import SolutionSection from "@/components/molecules/SolutionSection/SolutionSection";
import TrustSection from "@/components/molecules/TrustSection/TrustSection";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SolutionSection />
      <TrustSection />
      <HowItWorksSection />
      <ProductionSection />
    </MainLayout>
  );
}
