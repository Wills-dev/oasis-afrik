import OverviewWrapper from "@/components/organisms/OverviewWrapper/OverviewWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const page = () => {
  return (
    <DashboardLayout title="Overview">
      <OverviewWrapper />
    </DashboardLayout>
  );
};

export default page;
