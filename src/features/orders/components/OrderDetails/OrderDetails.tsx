import Image from "next/image";

import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";

import { User } from "@/features/auth/types";
import { ProductType } from "@/features/products/types";
import { formatCreatedAt } from "@/lib/helpers";

interface OrderDetailsProps {
  productInfo: ProductType;
  buyer: User;
  seller: User;
  address: string;
  isUserBuyer: boolean;
}

const OrderDetails = ({
  productInfo,
  buyer,
  seller,
  isUserBuyer,
  address,
}: OrderDetailsProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex max-md:flex-col gap-4">
      <div className="max-w-[203px] w-full min-w-[203px]">
        <Image
          src={productInfo?.productImages[0]?.imgUrl}
          alt="product_image"
          width={203}
          height={200}
          className="w-full h-[200px] object-cover rounded"
        />
      </div>
      <div className="flex-1 md:min-w-md w-full space-y-4">
        <h6 className="sm:text-xl text-lg font-medium">
          Premium Arabic black Coffee Beans
        </h6>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <InfoDisc title="Price" value={productInfo?.price} />
          <InfoDisc title="Requested quantity" value={productInfo?.quantity} />
          <InfoDisc
            title="Date"
            value={
              productInfo?.createdAt && formatCreatedAt(productInfo?.createdAt)
            }
          />
          <InfoDisc
            title="Min lead time"
            value={`${productInfo?.minLead}${productInfo?.minLeadPeriod}`}
          />
          <InfoDisc
            title="Max lead time"
            value={`${productInfo?.maxLead}${productInfo?.maxLeadPeriod}`}
          />
          <InfoDisc title="Delivery address" value={address} />
          {!isUserBuyer ? (
            <InfoDisc
              title="Buyer's full name"
              value={`${buyer?.firstName} ${buyer?.lastName}`}
            />
          ) : (
            <InfoDisc
              title="Seller's full name"
              value={`${seller?.firstName} ${seller?.lastName}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
