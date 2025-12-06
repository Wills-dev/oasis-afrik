import DashboardNavLink from "@/components/atoms/DashboardNavLink/DashboardNavLink";

import { dashboardLinks } from "@/lib/constants";

const DashboardMainNavWrapper = () => {
  return (
    <div className="space-y-3 py-6">
      {dashboardLinks?.map((link) => (
        <DashboardNavLink
          key={link?.title}
          link={link?.link}
          title={link?.title}
          icon={link?.icon}
        />
      ))}
    </div>
  );
};

export default DashboardMainNavWrapper;
