"use client";

import Alternative from "../../Alternative/Alternative";
import Button from "@/components/atoms/Button/Button";
import GoogleButton from "@/components/atoms/GoogleButton/GoogleButton";
import HorizontalLine from "@/components/atoms/HorizontalLine/HorizontalLine";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";

import { useLogin } from "@/features/auth/hooks/useLogin";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

const LoginForm = () => {
  const {
    showPassword,
    handleChange,
    loginForm,
    isPending,
    handleSubmit,
    togglePasswordVisibility,
  } = useLogin();

  const isFormFilled = areAllFieldsFilled(loginForm);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
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
        <Button type="submit" loading={isPending} disabled={!isFormFilled}>
          Login
        </Button>
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
