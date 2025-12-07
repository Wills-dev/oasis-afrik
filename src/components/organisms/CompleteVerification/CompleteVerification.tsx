import Button from "@/components/atoms/Button/Button";

const CompleteVerification = () => {
  return (
    <div className="w-full flex md:items-center justify-between max-md:flex-col border border-[#009933] bg-[#0099330D]  p-[16px] rounded-[12px] gap-6">
      <div>
        <h6 className="sm:text-lg font-medium">Complete Verification</h6>
        <p className="text-gray-600 max-sm:text-sm">
          Verify your identity to upload products, set up payments method and
          start making sales
        </p>
      </div>
      <Button width="w-fit" href="/dashboard/verification">
        Complete verification
      </Button>
    </div>
  );
};

export default CompleteVerification;
