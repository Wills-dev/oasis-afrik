import Link from "next/link";

import Button from "@/components/atoms/Button/Button";

const AuthPanelButtons = () => {
  return (
    <div className="flex lg:items-center max-lg:flex-col lg:gap-2 gap-6">
      <Link
        className="font-medium text-sm hover:text-green-500 transition-all duration-300 cursor-pointer"
        href="/login"
      >
        Login
      </Link>
      <Link className="" href="/sign-up">
        <Button width="w-fit" height="h-[45px]">
          Join now
        </Button>
      </Link>
    </div>
  );
};

export default AuthPanelButtons;
