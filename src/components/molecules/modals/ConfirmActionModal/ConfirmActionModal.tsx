"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";

interface ConfirmActionModalProps {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  variant?: "primary" | "danger" | "warning" | "success" | "info";
}

const ConfirmActionModal = ({
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  isLoading = false,
  variant = "primary",
}: ConfirmActionModalProps) => {
  const variantConfig = {
    primary: {
      icon: <CheckCircle className="w-6 h-6" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      confirmBg: "bg-green-600 hover:bg-green-700",
      confirmText: "text-white",
    },
    danger: {
      icon: <XCircle className="w-6 h-6" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      confirmBg: "bg-red-600 hover:bg-red-700",
      confirmText: "text-white",
    },
    warning: {
      icon: <AlertCircle className="w-6 h-6" />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      confirmBg: "bg-amber-600 hover:bg-amber-700",
      confirmText: "text-white",
    },
    success: {
      icon: <CheckCircle className="w-6 h-6" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      confirmBg: "bg-green-600 hover:bg-green-700",
      confirmText: "text-white",
    },
    info: {
      icon: <Info className="w-6 h-6" />,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
      confirmBg: "bg-slate-600 hover:bg-slate-700",
      confirmText: "text-white",
    },
  };

  const config = variantConfig[variant];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center shrink-0 ${config.iconColor}`}
            >
              {config.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{message}</p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 bg-slate-100 text-slate-700 py-3 px-4 rounded-xl font-semibold
              hover:bg-slate-200 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`
              flex-1 py-3 px-4 rounded-xl font-semibold transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
              ${config.confirmBg} ${config.confirmText}
            `}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </span>
            ) : (
              confirmLabel
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmActionModal;
