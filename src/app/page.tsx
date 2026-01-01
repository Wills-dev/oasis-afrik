import HeroSection from "@/components/molecules/HeroSection/HeroSection";
import SolutionSection from "@/components/molecules/SolutionSection/SolutionSection";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SolutionSection />
    </MainLayout>
  );
}
