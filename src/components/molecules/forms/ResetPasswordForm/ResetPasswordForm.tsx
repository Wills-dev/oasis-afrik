"use client";

import Link from "next/link";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

import { useResetPassword } from "@/features/auth/hooks/useResetPassword";

const ResetPasswordForm = () => {
  const {
    handleSubmit,
    isPending,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    togglePasswordVisibility,
  } = useResetPassword();

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label title="Password" />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword}
          showPassword={showPassword}
          name="password"
          onTogglePassword={togglePasswordVisibility}
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <Label title="Confrim Password" />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showPassword}
          showPassword={showPassword}
          name="confirm_password"
          onTogglePassword={togglePasswordVisibility}
          placeholder=""
        />
      </div>
      <div className="w-full">
        <Link href="/login">
          {" "}
          <Button>Proceed</Button>
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
