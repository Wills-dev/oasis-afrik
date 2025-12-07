import { MapPin, Star } from "lucide-react";
import { ProductType } from "../../types";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import Button from "@/components/atoms/Button/Button";

interface ProductInfoProps {
  productInfo: ProductType;
}

const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  const isProductOwner = true;
  return (
    <div className="max-w-[576px] md:min-w-[450px] min-w-[300px] w-full space-y-6">
      <div className="space-y-1">
        <h4 className="font-medium sm:text-3xl text-2xl">
          {productInfo?.productName}
        </h4>
        <p className="sm:text-lg font-medium text-gray-700">
          {productInfo.amount} per gram
        </p>
        <div className="flex items-center gap-1 text-gray-500 max-sm:text-sm">
          <Star className="w-4 h-4 text-yellow-500" />
          <p>{productInfo?.rating}</p>
          <p>{`(${productInfo?.reviews})`}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <p>
            {productInfo?.minLead}
            {productInfo?.minLeadPeriod}
          </p>{" "}
          -{" "}
          <p>
            {productInfo?.maxLead}
            {productInfo?.maxLeadPeriod}
          </p>
        </div>
        <InfoDisc title="MOR:" value={productInfo?.minOrder} horizontal />
        <InfoDisc title="Country:" value={productInfo?.country} horizontal />
        <InfoDisc title="Category:" value={productInfo?.category} horizontal />
        <InfoDisc
          title="Available Qty:"
          value={productInfo?.quantity}
          horizontal
        />
      </div>
      <div className="space-y-1">
        <h6 className="sm:text-lg font-medium">Product details</h6>
        <p className="text-gray-700 max-sm:text-sm">
          {productInfo?.description}
        </p>
      </div>
      <div className="rounded-md border border-gray-200 p-[16px] space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="sm:text-lg font-medium">Kenyan highlands.co</p>
          <StatusBubble status="verified" />
        </div>
        <div className="flex gap-2 items-center">
          <MapPin className="w-5 h-5" />
          <p className="text-sm text-gray-400">{productInfo?.country}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <InfoDisc title="Avg. Resp time" value="2  hrs" />
          <InfoDisc title="Joined" value="2024" />
          <InfoDisc title="Ratings" value="4.5" rating />
        </div>
      </div>
      {isProductOwner ? (
        <div className="flex items-center flex-wrap gap-4">
          <Button
            width="flex-1 w-full"
            href={`/products/info/${productInfo?.id}/edit`}
          >
            Edit product
          </Button>
          <Button
            width="flex-1 w-full"
            bgColor="bg-white border border-gray-300 text-gray-600"
            bgHoverColor="hover:bg-gray-50"
          >
            Delete product
          </Button>
        </div>
      ) : (
        <Button>Request a quote</Button>
      )}
    </div>
  );
};

export default ProductInfo;
