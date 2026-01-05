import DashboardNavLink from "@/components/atoms/DashboardNavLink/DashboardNavLink";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { otherDashboardLinks } from "@/lib/constants";

const OtherDashboardLinks = () => {
  const { isLoggingOut, logout } = useLogout();

  return (
    <div className="space-y-1 w-full">
      {otherDashboardLinks?.map((link) => (
        <DashboardNavLink
          key={link?.title}
          link={link?.link}
          title={link?.title}
          icon={link?.icon}
        />
      ))}

      <button
        onClick={logout}
        className={`flex items-center gap-2 px-2 py-3 rounded hover:bg-gray-100  transition-all duration-300 text-sm font-medium text-red-600 w-full min-w-full cursor-pointer`}
        disabled={isLoggingOut}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        <span className="block">
          {isLoggingOut ? "Logging out..." : "Sign out"}
        </span>
      </button>
    </div>
  );
};

export default OtherDashboardLinks;
