import UserAvatar from "@/components/molecules/UserAvatar/UserAvatar";

import { Bell, Menu } from "lucide-react";

const DashboardNav = ({
  toggleSidebar,
  title = "Overview",
}: {
  toggleSidebar: () => void;
  title: string;
}) => {
  //   const isLoading = false;
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 bg-[#FAFAFB] border-b border-[#EDEDED]">
      <div className="sm:px-6 px-4 py-2 flex items-center justify-between gap-8 h-full w-full">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h6 className="text-sm">{title}</h6>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full shadow">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="">
            <UserAvatar imgUrl="/assets/dummy/dummy-avatar.jpg" name="O" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
