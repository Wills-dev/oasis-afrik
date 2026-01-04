"use client";

import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import TermsAcceptance from "../../TermsAcceptance/TermsAcceptance";
import Button from "@/components/atoms/Button/Button";
import HorizontalLine from "@/components/atoms/HorizontalLine/HorizontalLine";
import GoogleButton from "@/components/atoms/GoogleButton/GoogleButton";
import Alternative from "../../Alternative/Alternative";

import { useSignUp } from "@/features/auth/hooks/useSignUp";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

const SignUpForm = () => {
  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    isPending,
    signUpForm,
    acceptTerms,
    setAcceptTerms,
  } = useSignUp();

  const isFormFilled = areAllFieldsFilled(signUpForm);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label title="First Name" />
        <Input
          value={signUpForm.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <Label title="Last Name" />
        <Input
          value={signUpForm.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <Label title="Email" />
        <Input
          value={signUpForm.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder=""
        />
      </div>
      <div className="space-y-2">
        <Label title="Password" />
        <Input
          value={signUpForm.password}
          onChange={handleChange}
          type={showPassword}
          showPassword={showPassword}
          name="password"
          onTogglePassword={togglePasswordVisibility}
          placeholder=""
        />
      </div>
      <TermsAcceptance accepted={acceptTerms} setAccepted={setAcceptTerms} />
      <div className="w-full">
        <Button
          type="submit"
          disabled={!isFormFilled || !acceptTerms}
          loading={isPending}
        >
          Sign up
        </Button>
      </div>
      <div className="py-3 flex items-center justify-center gap-2">
        <HorizontalLine />
        <p className="text-gray-600 sm:text-sm text-xs">Or continue with</p>
        <HorizontalLine />
      </div>
      <GoogleButton />
      <Alternative
        descriptions="Have an account??"
        link="/login"
        title="Login"
      />
    </form>
  );
};

export default SignUpForm;
