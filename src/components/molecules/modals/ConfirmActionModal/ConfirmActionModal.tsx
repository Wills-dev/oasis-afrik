"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";

interface ConfirmActionModalProps {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  variant?: "primary" | "danger" | "warning" | "success" | "info";
  requiresEvidence?: boolean;
  selectedImage?: string | null;
  onUploadClick?: () => void;
  onImageDelete?: () => void;
  evidenceType?: "shipment" | "delivery";
  selectedImageFile?: File | null;
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
  requiresEvidence = false,
  selectedImage = null,
  onUploadClick,
  onImageDelete,
  evidenceType = "shipment",
  selectedImageFile,
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

  const isConfirmDisabled = isLoading || (requiresEvidence && !selectedImage);

  const isPdf = selectedImageFile?.type === "application/pdf";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
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

        {requiresEvidence && (
          <div className="px-6 pb-4">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold text-amber-900 mb-1">
                Evidence Required
              </p>
              <p className="text-xs text-amber-700">
                Please upload proof of {evidenceType} (receipt, photo, tracking,
                etc.)
              </p>
            </div>

            {!selectedImage ? (
              <button
                onClick={onUploadClick}
                type="button"
                className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-green-500 hover:bg-green-50/50 transition-all group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                    <Upload className="w-6 h-6 text-slate-500 group-hover:text-green-600" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-slate-900">
                      Upload Evidence
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      PNG, JPG, JPEG, PDF up to 5MB
                    </p>
                  </div>
                </div>
              </button>
            ) : (
              <div className="border-2 border-green-200 bg-green-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  {!isPdf && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-green-200">
                      <Image
                        src={selectedImage}
                        alt="Evidence preview"
                        className="w-full h-full object-cover"
                        width={80}
                        height={80}
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          Evidence Uploaded
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {selectedImageFile?.name}
                        </p>
                        <a
                          href={selectedImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          View File
                        </a>

                        <p className="text-xs text-green-600 mt-0.5">
                          ✓ Ready to submit
                        </p>
                      </div>
                      <button
                        onClick={onImageDelete}
                        type="button"
                        className="p-1 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onUploadClick}
                  type="button"
                  className="w-full mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Change File
                </button>
              </div>
            )}
          </div>
        )}

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
            disabled={isConfirmDisabled}
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
