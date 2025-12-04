"use client";

import Button from "@/components/atoms/Button/Button";
import GoogleButton from "@/components/atoms/GoogleButton/GoogleButton";
import HorizontalLine from "@/components/atoms/HorizontalLine/HorizontalLine";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import { useLogin } from "@/features/auth/hooks/useLogin";
import Link from "next/link";
import Alternative from "../../Alternative/Alternative";

const LoginForm = () => {
  const {
    showPassword,
    handleChange,
    handleSubmit,
    loginForm,
    isPending,
    togglePasswordVisibility,
  } = useLogin();

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label title="Email" />
        <Input
          value={loginForm.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <Label title="Password" />
        <Input
          value={loginForm.password}
          onChange={handleChange}
          type={showPassword}
          showPassword={showPassword}
          name="password"
          onTogglePassword={togglePasswordVisibility}
          placeholder=""
        />
      </div>
      <div className="flex justify-end">
        <Alternative
          descriptions="Forgot password?"
          link="/forgot-password"
          title="Forgot password"
        />
      </div>
      <div className="w-full">
        <Link href="/dashboard/overview">
          {" "}
          <Button>Login</Button>
        </Link>
      </div>
      <div className="py-3 flex items-center justify-center gap-2">
        <HorizontalLine />
        <p className="text-gray-600 sm:text-sm text-xs">Or continue with</p>
        <HorizontalLine />
      </div>
      <GoogleButton />
      <Alternative
        descriptions="Don’t have an account?"
        link="/sign-up"
        title="Sign up"
      />
    </form>
  );
};

export default LoginForm;
