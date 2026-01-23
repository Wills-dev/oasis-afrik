import { Skeleton } from "@/components/ui/skeleton";

const QuoteInfoLoader = () => {
  return (
    <div className="max-w-xl w-full space-y-4">
      <Skeleton className="w-full h-[186px] rounded-lg bg-gray-300" />
      <Skeleton className="w-52 h-8 bg-gray-300 rounded-md" />
      <Skeleton className="w-full h-48 bg-gray-300 rounded-[10px]" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="rounded-lg bg-gray-300 gap-2 flex-1 w-full h-12" />
        <Skeleton className="rounded-lg bg-gray-300 gap-2 flex-1 w-full h-12" />
      </div>
    </div>
  );
};

export default QuoteInfoLoader;
