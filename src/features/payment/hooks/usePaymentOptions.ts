import { useBankTransferPayment } from "./useBankTransferPayment";
import { usePaystackPayment } from "./usePaystackPayment";

export const usePaymentOptions = (
  orderId: string,
  quoteId: string,
  onClose: (isOpen: boolean) => void,
) => {
  const { isPending, initializePaystackPayment } = usePaystackPayment(quoteId);
  const {
    isSubmitting,
    isSuccess,
    uploadBankTransferProof,
    isOpen,
    setIsOpen,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFile,
    setSelectedImage,
    selectedImage,
    selectedImageFile,
  } = useBankTransferPayment(quoteId);

  const paymentGateways = [
    {
      id: "direct_transfer",
      name: "Direct Transfer",
      icon: "/assets/images/payment-partners/bank-transfer.svg",
      description: "Transfer directly to our escrow account",
      onClick: () => {
        setIsOpen(true);
        onClose(false);
      },
    },
    // {
    //   id: "stripe",
    //   name: "Strip",
    //   icon: "/assets/images/payment-partners/stripe.svg",
    //   description: "Visa, Mastercard, Amex",
    //   onClick: () => {
    //     console.log("Processing Stripe payment for order:", orderId);
    //   },
    // },
    {
      id: "paystack",
      name: "Paystack",
      icon: "/assets/images/payment-partners/paystack.svg",
      description: "Pay with your Paystack account",
      onClick: () => initializePaystackPayment(orderId),
    },
  ];

  const isLoading = isPending || isSubmitting;

  return {
    isLoading,
    paymentGateways,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFile,
    setSelectedImage,
    selectedImage,
    isSuccess,
    uploadBankTransferProof,
    open: isOpen,
    setOpen: setIsOpen,
    isSubmitting,
    selectedImageFile,
  };
};
