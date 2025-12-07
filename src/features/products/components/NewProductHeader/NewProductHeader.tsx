const NewProductHeader = ({ step }: { step: number }) => {
  const progressWidth = step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full";
  return (
    <div className="space-y-2">
      <h6 className="sm:text-xl text-lg font-medium ">Upload Product</h6>
      <p className="text-gray-500 max-sm:text-sm">{step}/3</p>
      <div className="w-full h-1 rounded-full bg-gray-200">
        <div className={`h-full ${progressWidth} bg-black rounded-full`}></div>
      </div>
    </div>
  );
};

export default NewProductHeader;
