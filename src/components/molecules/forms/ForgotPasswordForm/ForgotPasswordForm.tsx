"use client";

import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import Alternative from "../../Alternative/Alternative";
import Button from "@/components/atoms/Button/Button";
import NotificationCard from "../../NotificationCard/NotificationCard";

import { useForgotPassword } from "@/features/auth/hooks/useForgotPassword";

const ForgotPasswordForm = () => {
  const {
    // handleSubmit,
    // isPending,
    email,
    setEmail,
    setOnSucces,
    onSuccess,
  } = useForgotPassword();

  return (
    <div className="">
      {onSuccess ? (
        <NotificationCard
          title="Password Reset Email Sent"
          description="A password reset link has been sent to your email if it’s associated with an account. Please check your inbox and spam folder."
        />
      ) : (
        <form className="space-y-4">
          <div className="space-y-2">
            <Label title="Email" />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder=""
            />
          </div>
          <div className="flex justify-end">
            <Alternative
              descriptions="Remember password?"
              link="/login"
              title="Login"
            />
          </div>
          <div className="w-full">
            <Button onClick={() => setOnSucces(true)}>Proceed</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
