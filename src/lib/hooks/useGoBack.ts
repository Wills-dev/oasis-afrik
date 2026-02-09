import { useRouter } from "next/navigation";

export const useGoBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return {
    handleBack,
  };
};
