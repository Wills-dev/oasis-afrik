import DashboardNavLink from "@/components/atoms/DashboardNavLink/DashboardNavLink";
import { otherDashboardLinks } from "@/lib/constants";

const OtherDashboardLinks = () => {
  return (
    <div className="space-y-1">
      {otherDashboardLinks?.map((link) => (
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

export default OtherDashboardLinks;
