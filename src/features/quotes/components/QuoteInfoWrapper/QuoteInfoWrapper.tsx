"use client";

import { useState } from "react";
import Image from "next/image";

import BackButton from "@/components/atoms/BackButton/BackButton";
import Button from "@/components/atoms/Button/Button";
import QuoteResponseCard from "../QuoteResponseCard/QuoteResponseCard";
import QuoteInfoLoader from "@/components/atoms/skeletonLoader/QuoteInfoLoader";

import { QuoteNote } from "../../types";
import { useGetQuoteInfo } from "../../hooks/useGetQuoteInfo";
import { useRejectQuote } from "../../hooks/useRejectQuote";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import QuoteInfoModal from "@/components/molecules/modals/QuoteInfoModal/QuoteInfoModal";

const QuoteInfoWrapper = ({ quoteId }: { quoteId: string }) => {
  const { handleRejectQuote, isRejecting, isOpen, setIsOpen, onCancel } =
    useRejectQuote();

  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const { data, isLoading } = useGetQuoteInfo(quoteId);

  return (
    <div className="space-y-6">
      <BackButton />
      {isLoading ? (
        <QuoteInfoLoader />
      ) : (
        <div className="max-w-xl w-full space-y-4">
          <div className=" space-y-2 border-b border-gray-100 pb-4">
            {data?.product?.mainImage && (
              <div className="w-full h-[186px]">
                <Image
                  src={data?.product?.mainImage}
                  alt="product image"
                  width={456}
                  height={186}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
            <h6 className="sm:text-xl text-lg font-medium">
              {data?.product?.name}
            </h6>
          </div>
          <div className="max-h-[70vh] overflow-y-auto w-full space-y-4">
            {data?.notes?.map((response: QuoteNote) => (
              <QuoteResponseCard
                key={response?.id}
                responseInfo={response}
                currency={data?.currency?.symbol}
                buyerId={data?.buyerId}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              width="flex-1 w-full"
              onClick={() => setShowAcceptModal(true)}
            >
              Accept / negotiate
            </Button>
            <Button
              width="flex-1 w-full"
              bgColor="bg-white border border-gray-300 text-gray-600"
              onClick={() => setIsOpen(true)}
              bgHoverColor="hover:bg-gray-50"
            >
              Decline quote
            </Button>
          </div>
        </div>
      )}
      <ConfirmAction
        isPending={isRejecting}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={onCancel}
        onConfirm={() => handleRejectQuote(quoteId)}
        title="Reject quote"
        description="You’re about to reject this quote. Please confirm to proceed."
      />
      <QuoteInfoModal
        open={showAcceptModal}
        setOpen={setShowAcceptModal}
        currency={data?.currency?.symbol}
        buyerId={data?.buyerId}
        productImg={data?.product?.mainImage}
        productName={data?.product?.name}
        response={data?.notes[data?.notes.length - 1]}
      />
    </div>
  );
};

export default QuoteInfoWrapper;
