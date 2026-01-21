import { Skeleton } from "@/components/ui/skeleton";

const ProductInfoLoader = () => {
  return (
    <>
      <Skeleton className="min-w-[300px] max-w-[500px] w-full h-96 bg-gray-300 rounded-md" />
      <Skeleton className="max-w-xl md:min-w-[450px] min-w-[300px] w-full h-96 bg-gray-300 rounded-md" />
    </>
  );
};

export default ProductInfoLoader;
