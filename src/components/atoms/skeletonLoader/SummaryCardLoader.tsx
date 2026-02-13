import { Skeleton } from "@/components/ui/skeleton";

const SummaryCardLoader = () => {
  return (
    <>
      {" "}
      <Skeleton className="flex-1 w-full min-w-[270px] h-[165px] rounded-md bg-gray-300" />
      <Skeleton className="flex-1 w-full min-w-[270px] h-[165px] rounded-md bg-gray-300" />
      <Skeleton className="flex-1 w-full min-w-[270px] h-[165px] rounded-md bg-gray-300" />
      <Skeleton className="flex-1 w-full min-w-[270px] h-[165px] rounded-md bg-gray-300" />
    </>
  );
};

export default SummaryCardLoader;
