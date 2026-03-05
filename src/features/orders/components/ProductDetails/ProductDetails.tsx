"use client";

import Link from "next/link";
import Image from "next/image";

import DataField from "@/components/atoms/DataField/DataField";
import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

import { OrderTableData } from "../../types";
import { numberWithCommas } from "@/lib/helpers";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";
import pluralize from "pluralize";

const ProductDetails = ({ data }: { data: OrderTableData }) => {
  const minLead = data?.quote.minLeadTime || data?.product.minLeadTime;
  const maxLead = data?.quote.maxLeadTime || data?.product.maxLeadTime;

  const quantityUnit = data?.quantityUnit?.abbreviation || "";
  const formattedQuantityUnit = pluralize(quantityUnit, Number(data?.quantity));

  return (
    <InfoCardWrapper title="Order Details">
      <div className="p-6">
        <div className="flex gap-6 mb-6">
          <div className="w-32 h-32 bg-slate-100 rounded-xl overflow-hidden hrink-0 cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all">
            {data?.product?.mainImage && (
              <Image
                width={128}
                height={128}
                src={data?.product?.mainImage}
                alt={data?.product?.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex-1">
            <Link
              href={`/dashboard/products/info/${data?.product?.id}`}
              className="text-2xl font-bold text-slate-900 mb-2 hover:underline transition-all duration-300"
            >
              {data?.product?.name}
            </Link>
            <p className="text-slate-600 text-sm line-clamp-3">
              {data?.product?.description}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <DataField
            label="Quantity"
            value={`${data?.quantity && numberWithCommas(Number(data?.quantity))} ${formattedQuantityUnit}`}
          />
          <DataField
            label="Unit Price"
            value={`${data?.currency && getCurrencySign(data?.currency)}${data?.product.price && numberWithCommas(Number(data?.product.price))}`}
          />
          <DataField
            label="Total Amount"
            value={`${data?.currency && getCurrencySign(data?.currency)}${data?.amount && numberWithCommas(Number(data?.amount))}`}
            large
          />
          <DataField label="Lead Time" value={`${minLead}-${maxLead}`} />
        </div>
        <div className="pt-10">
          <Link
            href={`/dashboard/quotes/info/${data?.quoteId}`}
            className="text-sm text-green-600 hover:underline transition-all duration-300"
          >
            View Quote details
          </Link>
        </div>
      </div>
    </InfoCardWrapper>
  );
};

export default ProductDetails;
