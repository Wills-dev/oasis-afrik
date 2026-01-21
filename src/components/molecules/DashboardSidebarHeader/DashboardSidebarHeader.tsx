import Logo from "@/components/atoms/Logo/Logo";
import Image from "next/image";

const DashboardSidebarHeader = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  return (
    <div className="flex justify-between items-center pb-4">
      <Logo />
      <button
        type="button"
        onClick={toggleSidebar}
        className="lg:hidden block "
      >
        <Image
          src="/assets/icons/arrange-circle-2.svg"
          alt="menu-icon"
          width={20}
          height={20}
          className="w-auto h-auto object-contain"
        />
      </button>
    </div>
  );
};

export default DashboardSidebarHeader;
