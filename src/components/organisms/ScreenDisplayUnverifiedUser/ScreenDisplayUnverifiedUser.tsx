import EmptyState from "@/components/molecules/EmptyState/EmptyState";
import CompleteVerification from "../CompleteVerification/CompleteVerification";

const ScreenDisplayUnverifiedUser = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col gap-10">
      <CompleteVerification />
      <div className="flex-1 h-full w-full flex justify-center items-center">
        <EmptyState description="You do not have any activities yet, verify your identity to get started" />
      </div>
    </div>
  );
};

export default ScreenDisplayUnverifiedUser;
