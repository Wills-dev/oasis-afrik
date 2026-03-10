import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ChangePasswordWrapper from "@/features/auth/components/ChangePasswordWrapper/ChangePasswordWrapper";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Settings">
      <ChangePasswordWrapper />
    </DashboardLayout>
  );
};

export default SettingsPage;
