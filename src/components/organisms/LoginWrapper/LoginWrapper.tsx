import LoginForm from "@/components/molecules/forms/LoginForm/LoginForm";
import AuthLayout from "@/components/templates/AuthLayout/AuthLayout";

const LoginWrapper = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Login to your OasisAfrik account and continue connecting "
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginWrapper;
