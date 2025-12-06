"use client";

import { useState } from "react";

import Container from "@/components/atoms/Container/Container";
import DashboardSidebar from "@/components/organisms/DashboardSidebar/DashboardSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-white w-full">
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="lg:ml-64">
        <main className="pt-20">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
