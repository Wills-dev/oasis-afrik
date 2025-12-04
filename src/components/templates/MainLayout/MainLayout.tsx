import Footer from "@/components/organisms/Footer/Footer";
import Nav from "@/components/organisms/Nav/Nav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-full bg-[#F4F4F4] w-full">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
