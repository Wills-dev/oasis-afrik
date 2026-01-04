"use client";

import Button from "@/components/atoms/Button/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useResendOtp } from "@/features/auth/hooks/useResendOtp";
import { useVerifyRegistration } from "@/features/auth/hooks/useVerifyRegistration";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const VerifyWrapper = () => {
  const { otp, setOtp, isPending, handleSubmit } = useVerifyRegistration();
  const { isPending: isResending, handleSubmit: ResendOtp } = useResendOtp();

  const isFormFilled = otp?.length < 6 || otp.trim() === "";

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          value={otp}
          onChange={(value) => setOtp(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="justify-end flex items-center gap-2">
        <p>Didn&apos;t receive OTP?</p>{" "}
        <div className="text-green-500 hover:text-green-800 transition-all duration-300">
          {" "}
          {isResending ? (
            "Resending..."
          ) : (
            <button onClick={ResendOtp}>Resend</button>
          )}
        </div>
      </div>
      <Button type="submit" loading={isPending} disabled={isFormFilled}>
        Proceed
      </Button>
    </form>
  );
};

export default VerifyWrapper;
