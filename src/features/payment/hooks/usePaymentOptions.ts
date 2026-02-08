import { usePaystackPayment } from "./usePaystackPayment";

export const usePaymentOptions = (orderId: string, quoteId: string) => {
  const { isPending, initializePaystackPayment } = usePaystackPayment(quoteId);
  const paymentGateways = [
    {
      id: "stripe",
      name: "Strip",
      icon: "/assets/images/payment-partners/stripe.svg",
      description: "Visa, Mastercard, Amex",
      onClick: () => {
        console.log("Processing Stripe payment for order:", orderId);
      },
    },
    {
      id: "paystack",
      name: "Paystack",
      icon: "/assets/images/payment-partners/paystack.svg",
      description: "Pay with your Paystack account",
      onClick: () => initializePaystackPayment(orderId),
    },
  ];

  const isLoading = isPending;

  return { isLoading, paymentGateways };
};
