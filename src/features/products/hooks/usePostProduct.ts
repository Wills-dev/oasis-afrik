import { usePostProductState } from "./usePostProductState";
import { useUploadProductImgState } from "./useUploadProductImgState";

export const usePostProduct = () => {
  const {
    product,
    step,
    setProduct,
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
    setProduct,
    handleChange,
    selectedImages,
    selectedImageFiles,
    onSelectFile,
    handleImageDelete,
    setSelectedImageFiles,
    setSelectedImages,
    handleDropdownChange,
  };
};
