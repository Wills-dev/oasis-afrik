import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ResetPasswordWrapper from "@/features/auth/components/ResetPasswordWrapper/ResetPasswordWrapper";

const page = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ResetPasswordWrapper />
    </Suspense>
  );
};

export default page;
