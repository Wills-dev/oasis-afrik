import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import VerifyCompanyForm from "@/components/molecules/forms/VerifyCompanyForm/VerifyCompanyForm";

const CompanyVerification = () => {
  return (
    <div className="space-y-6">
      <DashboardTitle
        title="Company Verification"
        description="Provide your company details and upload the required documents to complete your verification."
      />
      <VerifyCompanyForm />
    </div>
  );
};

export default CompanyVerification;
