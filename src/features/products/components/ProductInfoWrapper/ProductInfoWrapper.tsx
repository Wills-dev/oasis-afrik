import BackButton from "@/components/atoms/BackButton/BackButton";
import ProductImageWrapper from "../ProductImageWrapper/ProductImageWrapper";

import { useGetProductInfo } from "../../hooks/useGetProductInfo";
import ProductInfo from "../ProductInfo/ProductInfo";

const ProductInfoWrapper = ({ productId }: { productId: string }) => {
  const {
    productInfo,
    // data,
    // isPending,
    // isLoading,
    // isError,
    // error,
    // refetch,
    currentImage,
    setCurrentImage,
  } = useGetProductInfo(productId);
  return (
    <div className="space-y-6">
      <BackButton />

      <div className="flex flex-wrap gap-4">
        <ProductImageWrapper
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          productImages={productInfo?.productImages}
          productName={productInfo?.productName}
        />
        <ProductInfo productInfo={productInfo} />
      </div>
    </div>
  );
};

export default ProductInfoWrapper;
