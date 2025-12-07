import { usePostProductState } from "./usePostProductState";
import { useUploadProductImgState } from "./useUploadProductImgState";

export const usePostProduct = () => {
  const {
    product,
    step,
    handleChange,
    nextStep,
    prevStep,
    handleReset,
    handleDropdownChange,
  } = usePostProductState();
  const {
    selectedImages,
    selectedImageFiles,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFiles,
    setSelectedImages,
  } = useUploadProductImgState();

  return {
    step,
    nextStep,
    prevStep,
    product,
    handleChange,
    selectedImages,
    onSelectFile,
    handleImageDelete,
    handleDropdownChange,
  };
};
