"use client";

import Link from "next/link";

import Button from "@/components/atoms/Button/Button";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const AuthPanelButtons = () => {
  useCurrentUser();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex lg:items-center max-lg:flex-col lg:gap-2 gap-6">
      {user ? (
        <Button href="/dashboard/overview">Dashboard</Button>
      ) : (
        <>
          <Link
            className="font-medium text-sm hover:text-green-500 transition-all duration-300 cursor-pointer"
            href="/login"
          >
            Login
          </Link>

          <Button href="/sign-up" width="w-fit" height="h-[45px]">
            Join now
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthPanelButtons;
