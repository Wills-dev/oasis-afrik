"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { OrderStatus } from "../../types";
import { getStatusConfig } from "../../helpers/getStatusConfig";
import ConfirmActionModal from "@/components/molecules/modals/ConfirmActionModal/ConfirmActionModal";

interface OrderStatusDropdownProps {
  currentStatus: OrderStatus;
  orderId: string;
  userRole: "BUYER" | "SELLER";
  onStatusUpdate: (orderId: string, newStatus: OrderStatus) => void;
  disabled?: boolean;
  isUpdating: boolean;
  showConfirm: boolean;
  setShowConfirm: (item: boolean) => void;
  selectedImage: string | null;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageDelete: () => void;
  selectedImageFile: File | null;
}

const OrderStatusDropdown = ({
  currentStatus,
  orderId,
  userRole,
  onStatusUpdate,
  disabled = false,
  isUpdating,
  showConfirm,
  setShowConfirm,
  onSelectFile,
  handleImageDelete,
  selectedImage,
  selectedImageFile,
}: OrderStatusDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | null>(
    null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getAvailableStatuses = (): OrderStatus[] => {
    if (userRole === "SELLER") {
      if (currentStatus === "PAID") {
        return ["PROCESSING"];
      }
      if (currentStatus === "PROCESSING") {
        return ["SHIPPED"];
      }
      if (currentStatus === "SHIPPED") {
        return ["DELIVERED"];
      }
      return [];
    } else {
      if (currentStatus === "DELIVERED") {
        return ["RECEIVED"];
      }
      return [];
    }
  };

  const availableStatuses = getAvailableStatuses();
  const canUpdate = availableStatuses.length > 0 && !disabled;

  const requiresEvidence = (status: OrderStatus | null): boolean => {
    return status === "SHIPPED" || status === "DELIVERED";
  };

  const currentConfig = getStatusConfig(currentStatus);

  const handleStatusSelect = (status: OrderStatus) => {
    setSelectedStatus(status);
    setIsOpen(false);
    setShowConfirm(true);
  };

  const handleConfirmUpdate = async () => {
    if (!selectedStatus) return;

    onStatusUpdate(orderId, selectedStatus);
    setShowConfirm(false);
    setSelectedStatus(null);
  };

  const handleCancelUpdate = () => {
    setShowConfirm(false);
    setSelectedStatus(null);
    handleImageDelete();
  };

  if (!canUpdate) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${currentConfig.border} ${currentConfig.bg}`}
      >
        <span className={`font-semibold ${currentConfig.color}`}>
          {currentConfig.label === "PENDING_PAYMENT"
            ? "PENDING"
            : currentConfig.label}
        </span>
      </div>
    );
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,application/pdf"
        onChange={onSelectFile}
        className="hidden"
      />

      <div className="relative w-44" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled || isUpdating}
          className={`
            flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg border-2 transition-all w-full
            ${currentConfig.border} ${currentConfig.bg}
            hover:shadow-md active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
            min-w-[180px]
          `}
        >
          <span className={`font-semibold ${currentConfig.color}`}>
            {currentConfig.label}
          </span>
          <ChevronDown
            className={`w-5 h-5 ${currentConfig.color} transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full w-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-xl overflow-hidden z-50"
            >
              {availableStatuses.map((status) => {
                const config = getStatusConfig(status);
                return (
                  <button
                    key={status}
                    onClick={() => handleStatusSelect(status)}
                    className={`
                      w-full px-4 py-3 text-left transition-colors
                      hover:${config.bg} border-b border-slate-100 transition-all duration-300 last:border-0
                      flex items-center justify-between gap-2 cursor-pointer
                    `}
                  >
                    <span className={`font-medium ${config.color}`}>
                      {config.label}
                    </span>
                    {currentStatus === status && (
                      <Check className={`w-5 h-5 ${config.color}`} />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showConfirm && selectedStatus && (
          <ConfirmActionModal
            title="Update Order Status"
            message={`Are you sure you want to update the order status to "${
              getStatusConfig(selectedStatus).label
            }"?`}
            selectedImageFile={selectedImageFile}
            confirmLabel={isUpdating ? "Updating..." : "Confirm Update"}
            cancelLabel="Cancel"
            onConfirm={handleConfirmUpdate}
            onCancel={handleCancelUpdate}
            isLoading={isUpdating}
            variant="primary"
            requiresEvidence={requiresEvidence(selectedStatus)}
            selectedImage={selectedImage}
            onUploadClick={() => fileInputRef.current?.click()}
            onImageDelete={handleImageDelete}
            evidenceType={
              selectedStatus === "SHIPPED" ? "shipment" : "delivery"
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderStatusDropdown;
