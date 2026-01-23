import { Skeleton } from "@/components/ui/skeleton";

const QuoteLoader = () => {
  return (
    <>
      {["", "", "", "", "", ""].map((quote, index) => (
        <Skeleton
          key={index}
          className="rounded-[20px] max-w-4xl w-full h-40 bg-gray-300"
        />
      ))}
    </>
  );
};

export default QuoteLoader;
