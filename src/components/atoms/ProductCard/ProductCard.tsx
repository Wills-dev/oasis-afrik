import Image from "next/image";

import { Star } from "lucide-react";
import Link from "next/link";

const ProductCard = ({
  productImg,
  productName,
  businessName,
  rating,
  price,
  currency,
  unit,
  productId,
}: {
  productImg: string;
  productName: string;
  businessName: string;
  rating: string;
  price: string;
  currency?: string;
  unit: string;
  productId: string;
}) => {
  return (
    <Link
      href={`/dashboard/products/info/${productId}`}
      className="w-full min-w-full space-y-1 group"
    >
      <div className="overflow-hidden h-[255px] w-full rounded-[10px]">
        <Image
          src={productImg}
          alt={productName}
          width={320}
          height={255}
          priority
          className="w-full h-full object-cover rounded-[10px] group-hover:scale-105 duration-300 transition-all"
        />
      </div>
      <div className="space-y-1">
        <h6 className="sm:text-lg font-medium truncate whitespace-nowrap group-hover:text-green-700 duration-300 transition-all">
          {productName}
        </h6>
        <div className="flex w-full justify-between sm:text-sm text-xs text-gray-400">
          <p className="">
            <span>
              {currency && currency}
              {price}
            </span>{" "}
            per <span>{unit}</span>
          </p>
          <p className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>{rating}</span>
          </p>
        </div>
        <p className="sm:text-sm text-xs text-gray-400">{businessName}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
