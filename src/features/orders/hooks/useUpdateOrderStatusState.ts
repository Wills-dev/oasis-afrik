import { useState } from "react";
import toast from "react-hot-toast";
import { toastOption } from "@/lib/helpers/toast";

export const useUpdateOrderStatusState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];

    const maxSizeInMB = 5 * 1024 * 1024;

    if (file.size > maxSizeInMB) {
      toast(`File ${file.name} exceeds the 5MB size limit.`, toastOption);
      return;
    }

    if (!validExtensions.includes(file.type)) {
      toast(
        `Unsupported file type. Only jpg, jpeg, png and pdf are allowed.`,
        toastOption,
      );
      return;
    }

    setSelectedImage(URL.createObjectURL(file));
    setSelectedImageFile(file);
  };

  const handleImageDelete = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(null);
    setSelectedImageFile(null);
  };

  return {
    isOpen,
    setIsOpen,
    selectedImage,
    selectedImageFile,
    onSelectFile,
    handleImageDelete,
    setSelectedImage,
    setSelectedImageFile,
  };
};
