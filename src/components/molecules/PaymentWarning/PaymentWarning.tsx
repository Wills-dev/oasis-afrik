import { AlertCircle } from "lucide-react";

const PaymentWarning = () => {
  return (
    <div className="bg-[#FF8D281A] text-[#7F6B5A] p-[16px] rounded-[12px] flex items-center gap-2">
      <AlertCircle className="w-5 h-5" />
      <p className="sm:text-sm text-xs">
        Once package is received by the buyer, full payment will be released to
        your account.
      </p>
    </div>
  );
};

export default PaymentWarning;
