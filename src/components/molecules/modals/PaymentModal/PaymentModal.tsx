"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { numberWithCommas } from "@/lib/helpers";
import { usePaymentOptions } from "@/features/payment/hooks/usePaymentOptions";

import Button from "@/components/atoms/Button/Button";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  orderId: string;
  amount: number;
  currency: string;
  productName: string;
}

const PaymentModal = ({
  isOpen,
  onClose,
  orderId,
  amount,
  currency,
  productName,
}: PaymentModalProps) => {
  const [selectedGateway, setSelectedGateway] = useState<string | null>(null);

  const { isLoading, paymentGateways } = usePaymentOptions(orderId);

  const handlePayment = () => {
    if (!selectedGateway) return;
    const gateway = paymentGateways.find((g) => g.id === selectedGateway);
    if (gateway) gateway.onClick();
  };

  const formattedAmount = amount && numberWithCommas(Number(amount));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Secure Payment</DialogTitle>
          <DialogDescription>Choose Payment Method</DialogDescription>
          <DialogDescription> Order ID #{orderId}</DialogDescription>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 p-4 bg-gray-50 rounded-2xl"
        >
          <p className="text-sm font-medium text-gray-700 mb-2">
            Order details:
          </p>
          <ul className="space-y-1">
            <li className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
              {productName}
            </li>
            <li className="text-sm text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full  bg-green-600" />
              {currency && getCurrencySign(currency)}
              {formattedAmount && formattedAmount}
            </li>
          </ul>
        </motion.div>
        <div className="space-y-3">
          {paymentGateways.map((gateway, index) => {
            const isSelected = selectedGateway === gateway.id;

            return (
              <motion.button
                key={gateway.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedGateway(gateway.id)}
                className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-green-600 bg-[#9B7EDE]/5 shadow-lg shadow-green-600/20"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="">
                    <Image
                      src={gateway?.icon}
                      width={100}
                      height={20}
                      alt={gateway?.id}
                      className="w-auto h-6 mb-2"
                    />
                    <p className="text-sm text-gray-600">
                      {gateway.description}
                    </p>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isSelected ? 1 : 0.8,
                      opacity: isSelected ? 1 : 0.3,
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isSelected
                        ? "bg-green-700 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 pt-0"
        >
          <Button
            onClick={handlePayment}
            type="button"
            loading={isLoading}
            disabled={!selectedGateway}
          >
            {isLoading ? "  Processing..." : "Continue to Payment"}
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-2xl"
        >
          <p className="text-sm text-blue-900 flex items-start gap-2">
            <Shield className="w-4 h-4 mt-0.5 shrink-0" />
            <span>
              Your payment information is encrypted and secure. We never store
              your card details.
            </span>
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
