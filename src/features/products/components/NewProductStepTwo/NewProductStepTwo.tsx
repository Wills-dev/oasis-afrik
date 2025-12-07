import Image from "next/image";

import { Upload } from "lucide-react";

interface NewProductStepTwoProps {
  selectedImages: string[] | null;
  onSelectFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageDelete: (index: number) => void;
}

const NewProductStepTwo = ({
  selectedImages,
  onSelectFile,
  handleImageDelete,
}: NewProductStepTwoProps) => {
  const disableImageInput = selectedImages
    ? selectedImages?.length >= 5
    : false;
  const imgLength = selectedImages ? selectedImages?.length : 0;

  return (
    <div className="space-y-6">
      <div className="">
        <h6 className="sm:text-lg font-medium">Media uploads</h6>
        <p className="max-sm:text-sm text-gray-500">
          Upload up to 5 images. First image will be the main product image.
          (JPG, PNG, max 2MB each)
        </p>
      </div>
      <label
        htmlFor="productImage"
        className="border-2 border-dashed rounded-xl sm:py-16  p-12 text-center cursor-pointer transition-all duration-200 ease-in-out block"
      >
        {" "}
        <input
          type="file"
          className="h-0 w-0 invisible"
          name="files"
          accept="image/*"
          multiple
          id="productImage"
          onChange={onSelectFile}
          disabled={disableImageInput}
        />
        <Upload
          className={`mx-auto mb-4 transition-colors w-10 h-10 text-slate-700`}
        />
        <p className="text-lg font-semibold text-slate-700 mb-2">
          Drop images here
        </p>
        <p className="text-sm text-slate-500">
          or click to browse files ({imgLength}/5)
        </p>
      </label>
      <div className="flex gap-2">
        {selectedImages &&
          selectedImages.map((image, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-md sm:w-[218px] sm:h-[205px] sm:w-[120px] sm:h-[120px] relative overflow-hidden"
            >
              <Image
                src="/assets/icons/cancel.svg"
                alt="product"
                width={20}
                height={20}
                onClick={() => handleImageDelete(index)}
                className="w-5 h-5 object-cover absolute top-2 right-2 cursor-pointer"
              />
              <Image
                src={image}
                alt="product"
                width={218}
                height={205}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewProductStepTwo;
