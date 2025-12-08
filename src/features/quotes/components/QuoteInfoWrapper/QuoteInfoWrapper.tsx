"use client";

import Image from "next/image";

import BackButton from "@/components/atoms/BackButton/BackButton";
import QuoteResponseCard from "../QuoteResponseCard/QuoteResponseCard";

import { useGetQuoteInfo } from "../../hooks/useGetQuoteInfo";
import Button from "@/components/atoms/Button/Button";

const QuoteInfoWrapper = ({ quoteId }: { quoteId: string }) => {
  const {
    quoteInfo,
    // data,  isPending, isLoading, isError, error, refetch
  } = useGetQuoteInfo(quoteId);

  return (
    <div className="space-y-6">
      <BackButton />
      <div className="max-w-xl w-full space-y-4">
        <div className=" space-y-2 border-b border-gray-100 pb-4">
          {quoteInfo?.productImage && (
            <div className="w-full h-[186px]">
              <Image
                src={quoteInfo?.productImage}
                alt="product_image"
                width={456}
                height={186}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          <h6 className="sm:text-xl text-lg font-medium">
            {quoteInfo?.productName}
          </h6>
        </div>
        <div className="max-h-[70vh] overflow-y-auto w-full space-y-4">
          <QuoteResponseCard isUserBuyer />
          <QuoteResponseCard isUserBuyer={false} />
          <QuoteResponseCard isUserBuyer />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button width="flex-1 w-full">Accept / negotiate</Button>
          <Button
            width="flex-1 w-full"
            bgColor="bg-white border border-gray-300 text-gray-600"
            bgHoverColor="hover:bg-gray-50"
          >
            Decline quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteInfoWrapper;
