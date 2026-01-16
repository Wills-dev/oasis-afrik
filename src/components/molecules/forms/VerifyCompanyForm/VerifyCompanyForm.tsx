"use client";

import Button from "@/components/atoms/Button/Button";
import FileDisplayName from "@/components/atoms/FileDisplayName/FileDisplayName";
import FileInput from "@/components/atoms/FileInput/FileInput";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";

import { useVerifyCompanyDetails } from "@/features/auth/hooks/useVerifyCompanyDetails";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

const VerifyCompanyForm = () => {
  const {
    handleChange,
    handleSubmit,
    isPending,
    companyInfo,
    validId,
    utilityDocument,
    cacDocument,
    isSubmitted,
    setValidId,
    setUtilityDocument,
    setCacDocument,
  } = useVerifyCompanyDetails();

  const isFormFilled =
    areAllFieldsFilled(companyInfo) &&
    validId &&
    utilityDocument &&
    cacDocument;

  return (
    <>
      {isSubmitted ? (
        <div className="flex justify-center items-center flex-col h-[60vh] w-full">
          <h4 className="text-lg font-medium mb-4">
            Thank you for submitting your company verification details!
          </h4>
          <p className="text-gray-600 mb-6 text-center">
            We have received your information and our team is currently
            reviewing it. You will be notified via email once the verification
            process is complete.
          </p>
          <Button href="/dashboard/overview">Dashboard</Button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label title="Admin Full Name" />
              <Input
                value={companyInfo.adminName}
                onChange={handleChange}
                type="text"
                name="adminName"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Company Name" />
              <Input
                value={companyInfo.companyName}
                onChange={handleChange}
                type="text"
                name="companyName"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Business Registration Number" />
              <Input
                value={companyInfo.businessRegistrationNumber}
                onChange={handleChange}
                type="text"
                name="businessRegistrationNumber"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Phone Number" />
              <Input
                value={companyInfo.phoneNumber}
                onChange={handleChange}
                type="text"
                name="phoneNumber"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Company Address" />
              <Input
                value={companyInfo.companyAddress}
                onChange={handleChange}
                type="text"
                name="companyAddress"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Company Email" />
              <Input
                value={companyInfo.companyEmail}
                onChange={handleChange}
                type="email"
                name="companyEmail"
                placeholder=""
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label title="Valid ID Document" />
            {validId ? (
              <FileDisplayName
                setFile={setValidId}
                displayName={validId.name}
              />
            ) : (
              <FileInput id="validId" onChange={handleChange} />
            )}
          </div>
          <div className="space-y-2">
            <Label title="CAC Document" />
            {cacDocument ? (
              <FileDisplayName
                setFile={setCacDocument}
                displayName={cacDocument.name}
              />
            ) : (
              <FileInput id="cacDocument" onChange={handleChange} />
            )}
          </div>
          <div className="space-y-2">
            <Label title="Utility Document" />
            {utilityDocument ? (
              <FileDisplayName
                setFile={setUtilityDocument}
                displayName={utilityDocument.name}
              />
            ) : (
              <FileInput id="utilityDocument" onChange={handleChange} />
            )}
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              width="w-fit"
              loading={isPending}
              disabled={!isFormFilled}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default VerifyCompanyForm;
