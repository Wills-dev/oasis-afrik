import { Skeleton } from "@/components/ui/skeleton";

const ProductCardLoader = () => {
  return (
    <>
      {["", "", "", "", "", "", "", ""].map((product, index) => (
        <div key={index} className="space-y-1  w-full min-w-full ">
          <Skeleton className="h-[255px] w-full min-w-full rounded-[10px] bg-gray-300" />
          <Skeleton className="h-8 w-full min-w-full rounded-md bg-gray-300" />
        </div>
      ))}
    </>
  );
};

export default ProductCardLoader;
