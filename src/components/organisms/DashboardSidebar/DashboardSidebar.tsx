import DashboardMainNavWrapper from "@/components/molecules/DashboardMainNavWrapper/DashboardMainNavWrapper";
import DashboardSidebarHeader from "@/components/molecules/DashboardSidebarHeader/DashboardSidebarHeader";
import OtherDashboardLinks from "@/components/molecules/OtherDashboardLinks/OtherDashboardLinks";

interface DashboardSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardSidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: DashboardSidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen min-h-screen w-64 bg-[#FAFAFB] border-r border-[#EDEDED] transition-transform duration-300 py-6 px-4 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <DashboardSidebarHeader toggleSidebar={toggleSidebar} />
        <div className="flex-1 h-full flex flex-col justify-between">
          <DashboardMainNavWrapper />
          <div className="space-y-16">
            <OtherDashboardLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
