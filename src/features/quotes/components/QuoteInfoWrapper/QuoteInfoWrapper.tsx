"use client";

import { useState } from "react";
import Image from "next/image";

import BackButton from "@/components/atoms/BackButton/BackButton";
import Button from "@/components/atoms/Button/Button";
import QuoteResponseCard from "../QuoteResponseCard/QuoteResponseCard";
import QuoteInfoLoader from "@/components/atoms/skeletonLoader/QuoteInfoLoader";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import QuoteInfoModal from "@/components/molecules/modals/QuoteInfoModal/QuoteInfoModal";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import PaymentModal from "@/components/molecules/modals/PaymentModal/PaymentModal";

import { QuoteNote } from "../../types";
import { useGetQuoteInfo } from "../../hooks/useGetQuoteInfo";
import { useRejectQuote } from "../../hooks/useRejectQuote";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const QuoteInfoWrapper = ({ quoteId }: { quoteId: string }) => {
  const { user, isLoading: loading } = useSelector(
    (state: RootState) => state.auth,
  );

  const { data, isLoading } = useGetQuoteInfo(quoteId);

  const { handleRejectQuote, isRejecting, isOpen, setIsOpen, onCancel } =
    useRejectQuote();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  console.log("isModalOpen", isModalOpen);

  const isFetching = loading || isLoading;

  const isUserBuyer = user?.id === data?.buyerId;

  const isQuoteNoteLength = (data?.notes?.length || 1) - 1;

  const isLastAuthor = data?.notes[isQuoteNoteLength]?.author?.id === user?.id;

  const removeActionBtn =
    data?.statusLabel === "ACCEPTED" || data?.statusLabel === "REJECTED";

  const isOrderPaidFor = data?.order?.status === "PAID";

  const showPaymentBtn =
    data?.statusLabel === "ACCEPTED" && !isOrderPaidFor && isUserBuyer;

  return (
    <div className="space-y-6">
      <BackButton />
      {isFetching ? (
        <QuoteInfoLoader />
      ) : (
        <div className="max-w-xl w-full space-y-4">
          <div className="flex justify-end">
            <StatusBubble status={data?.statusLabel} />
          </div>
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
                currency={data?.currency?.code || "NGN"}
                buyerId={data?.buyerId}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {!removeActionBtn && (
              <>
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
              </>
            )}
            {showPaymentBtn && (
              <Button
                type="button"
                width="flex-1 w-full"
                onClick={() => setIsModalOpen(true)}
              >
                Make order payment
              </Button>
            )}
            {isOrderPaidFor && (
              <Button href={`/dashboard/orders/info/${data?.order?.id}`}>
                View Order
              </Button>
            )}
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
        currency={data?.currency?.code}
        buyerId={data?.buyerId}
        productImg={data?.product?.mainImage}
        productName={data?.product?.name}
        response={data?.notes[data?.notes.length - 1]}
        isLastAuthor={isLastAuthor}
        setIsModalOpen={setIsModalOpen}
      />
      <PaymentModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        orderId={data?.order?.id || ""}
        quoteId={quoteId || ""}
        amount={data?.order?.amount || "0"}
        currency={data?.order?.currency || "NGN"}
        productName={data?.product?.name || ""}
      />
    </div>
  );
};

export default QuoteInfoWrapper;
