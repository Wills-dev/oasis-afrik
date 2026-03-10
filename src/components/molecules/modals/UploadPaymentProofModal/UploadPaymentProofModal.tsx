"use client";

import { FormEvent, useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Button from "@/components/atoms/Button/Button";
import Label from "@/components/atoms/Label/Label";
import Image from "next/image";
import DataField from "@/components/atoms/DataField/DataField";

import { CheckCircle, Upload, X } from "lucide-react";

const UploadPaymentProofModal = ({
  isOpen,
  onClose,
  isPending,
  onSelectFile,
  handleImageDelete,
  selectedImage,
  selectedImageFile,
  isSuccess,
  orderId,
  uploadBankTransferProof,
}: {
  isSuccess: boolean;
  isOpen: boolean;
  isPending: boolean;
  onClose: (isOpen: boolean) => void;
  selectedImage: string | null;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageDelete: () => void;
  selectedImageFile: File | null;
  orderId: string;
  uploadBankTransferProof: (e: FormEvent, orderId: string) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isPdf = selectedImageFile?.type === "application/pdf";

  const onUploadClick = () => fileInputRef.current?.click();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full">
        {isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Success</DialogTitle>
            </DialogHeader>
            <div className="h-[40vh] flex justify-center items-center space-y-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
              <p className="text-gray-600 text-center">
                Payment proof uploaded successfully. Our admin team is reviewing
                it and will confirm your payment once verification is complete
              </p>
              <div className="">
                <Button
                  href={`/dashboard/orders/info/${orderId}`}
                  width="w-fit"
                >
                  View Order Info
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Payment details</DialogTitle>
            </DialogHeader>
            <form
              className="space-y-10"
              onSubmit={(e) => uploadBankTransferProof(e, orderId)}
            >
              <div className="space-y-2">
                <DataField label="Bank Name" value="Union Bank" />
                <DataField label="Account Name" value="Harvest Oasis Ltd" />
                <DataField label="Account Number" value="0238723356" />
              </div>
              <div className="">
                <Label title="Payment proof" />
                <div className="w-full">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,application/pdf"
                    onChange={onSelectFile}
                    className="hidden"
                  />
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
                            Upload payment proof
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
                              alt="Payment preview"
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
                                Payment Proof Uploaded
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
                              onClick={handleImageDelete}
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
              </div>
              <div className="flex items-center justify-end flex-wrap gap-2">
                <Button
                  type="submit"
                  loading={isPending}
                  width="w-fit"
                  disabled={!selectedImageFile}
                >
                  Proceed
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UploadPaymentProofModal;
