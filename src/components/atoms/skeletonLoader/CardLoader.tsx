import { Skeleton } from "@/components/ui/skeleton";

const CardLoader = () => {
  return (
    <Skeleton className="flex-1 w-full min-w-[270px] h-[165px] bg-gray-300 rounded-md" />
  );
};

export default CardLoader;
