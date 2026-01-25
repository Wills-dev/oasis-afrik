"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";

import { QuoteNote } from "@/features/quotes/types";
import { numberWithCommas } from "@/lib/helpers";
import Button from "@/components/atoms/Button/Button";
import { useAcceptQuote } from "@/features/quotes/hooks/useAcceptQuote";
import ConfirmAction from "../../ConfirmAction/ConfirmAction";
import { useNegotiateQuote } from "@/features/quotes/hooks/useNegotiateQuote";
import NegotiateQuoteModal from "../NegotiateQuoteModal/NegotiateQuoteModal";

const QuoteInfoModal = ({
  open,
  setOpen,
  productImg,
  productName,
  response,
  buyerId,
  currency,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  productImg: string;
  productName: string;
  response: QuoteNote;
  buyerId: string;
  currency: string;
}) => {
  const { isOpen, setIsOpen, onCancel, isPending, handleAcceptQuote } =
    useAcceptQuote();
  const {
    showModal,
    setShowModal,
    negotiateInfo,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useNegotiateQuote();

  const quantity = `${response?.quantity ? numberWithCommas(Number(response?.quantity)) : response?.effectiveQuantity && numberWithCommas(Number(response?.effectiveQuantity))}`;

  const quantityUnit = `${response?.quantityUnit?.abbreviation ? response?.quantityUnit?.abbreviation : response?.effectiveQuantityUnit?.abbreviation && response?.effectiveQuantityUnit?.abbreviation}`;

  const amount = response?.amount
    ? numberWithCommas(Number(response?.amount))
    : response?.effectiveAmount &&
      numberWithCommas(Number(response?.effectiveAmount));

  const isUserBuyer = buyerId === response?.authorId;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle>Quote Info</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            {productImg && (
              <div className="w-full h-[186px]">
                <Image
                  src={productImg}
                  alt="product image"
                  width={456}
                  height={186}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
            <h6 className="sm:text-xl text-lg font-medium">{productName}</h6>
          </div>
          <div className="">
            <h6 className="sm:text-lg font-medium">
              {isUserBuyer ? "Buyer's note" : "Seller's note"}
            </h6>
            <p className="sm:text-sm text-xs text-gray-600">
              {response?.message}
            </p>
            <InfoDisc
              title={
                response?.quantity
                  ? "Proposed quantity:"
                  : "Requested quantity:"
              }
              value={`${quantity}${quantityUnit}`}
              horizontal
            />
            <InfoDisc
              title="Offered amount:"
              value={`${currency}${amount}`}
              horizontal
            />
            <InfoDisc
              title="From"
              value={`${response?.author?.firstName} ${response?.author?.lastName}`}
              horizontal
            />
            <InfoDisc
              title="Delivery address:"
              value={response?.address || response?.effectiveAddress || ""}
              horizontal
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              width="w-fit"
              onClick={() => {
                setOpen(false);
                setIsOpen(true);
              }}
            >
              Accept offer
            </Button>
            <Button
              width="w-fit"
              bgColor="bg-white border border-gray-300 text-gray-600"
              bgHoverColor="hover:bg-gray-50"
              onClick={() => {
                setOpen(false);
                setShowModal(true);
              }}
            >
              Negotiate
            </Button>
          </div>
        </div>
      </DialogContent>
      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={onCancel}
        onConfirm={() => handleAcceptQuote(response?.quoteId || "")}
        title="Accept quote"
        description="You’re about to accept this quote. Please confirm to proceed."
      />
      <NegotiateQuoteModal
        showQuoteForm={showModal}
        setShowQuoteForm={setShowModal}
        negotiateInfo={negotiateInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isPending={isSubmitting}
        currencySymbol={currency}
        quoteId={response?.quoteId || ""}
      />
    </Dialog>
  );
};

export default QuoteInfoModal;
