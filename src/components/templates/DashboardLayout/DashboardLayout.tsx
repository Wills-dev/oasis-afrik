"use client";

import { useState } from "react";

import Container from "@/components/atoms/Container/Container";
import DashboardSidebar from "@/components/organisms/DashboardSidebar/DashboardSidebar";
import DashboardNav from "@/components/organisms/DashboardNav/DashboardNav";

const DashboardLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-white w-full">
      <DashboardSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="lg:ml-64">
        <DashboardNav title={title} toggleSidebar={toggleSidebar} />
        <main className="pt-20 pb-10">
          <Container className="xl:px-6">{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
