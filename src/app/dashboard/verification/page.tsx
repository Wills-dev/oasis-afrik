import CompanyVerification from "@/components/organisms/CompanyVerification/CompanyVerification";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const page = () => {
  return (
    <DashboardLayout title="Verify company">
      <CompanyVerification />
    </DashboardLayout>
  );
};

export default page;
