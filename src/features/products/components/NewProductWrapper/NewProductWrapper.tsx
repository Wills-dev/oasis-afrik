"use client";
import Button from "@/components/atoms/Button/Button";
import { usePostProduct } from "../../hooks/usePostProduct";
import NewProductHeader from "../NewProductHeader/NewProductHeader";
import NewProductStepOne from "../NewProductStepOne/NewProductStepOne";

const NewProductWrapper = () => {
  const {
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
  } = usePostProduct();

  const showPrevButton = step !== 1;
  const showNextButton = step !== 3;
  const showSubmitButton = step === 3;

  return (
    <div className="space-y-6">
      <NewProductHeader step={step} />
      <form className="space-y-6">
        {step === 1 && (
          <NewProductStepOne
            product={product}
            handleChange={handleChange}
            handleDropdownChange={handleDropdownChange}
          />
        )}
        <div className="flex justify-end flex-wrap gap-2">
          {showPrevButton && (
            <Button
              onClick={prevStep}
              width="w-fit"
              bgColor="bg-gray-200 text-gray-600"
              bgHoverColor="hover:bg-gray-300"
            >
              Prev step
            </Button>
          )}{" "}
          {showNextButton && (
            <Button onClick={nextStep} width="w-fit">
              Next step
            </Button>
          )}
          {showSubmitButton && <Button>Submit</Button>}
        </div>
      </form>
    </div>
  );
};

export default NewProductWrapper;
