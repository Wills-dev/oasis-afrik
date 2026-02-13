import { Skeleton } from "@/components/ui/skeleton";

const InsightLoader = () => {
  return (
    <>
      {["", "", "", "", "", "", "", "", "", ""].map((skeleton, index) => (
        <Skeleton
          key={index}
          className="max-w-[413px] w-full min-w-[280px] rounded-[20px] bg-gray-300 h-40"
        />
      ))}
    </>
  );
};

export default InsightLoader;
