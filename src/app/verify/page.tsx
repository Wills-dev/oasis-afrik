import { Suspense } from "react";

import VerifyWrapper from "@/components/organisms/VerifyWrapper/VerifyWrapper";
import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

const VerifyPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <AuthLayout
        title="Verify email"
        description="Please enter OTP sent to your email."
      >
        <VerifyWrapper />
      </AuthLayout>
    </Suspense>
  );
};

export default VerifyPage;
