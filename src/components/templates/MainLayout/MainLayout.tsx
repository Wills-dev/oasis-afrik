"use client";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import Footer from "@/components/organisms/Footer/Footer";
import Nav from "@/components/organisms/Nav/Nav";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSelector((state: RootState) => state.auth);
  return (
    <div className="min-h-screen h-full bg-[#F4F4F4] w-full">
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          <Nav />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
