const FileInput = ({
  id,
  onChange,
}: {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label
      htmlFor={id}
      className="h-48 sm:h-56 rounded-lg w-full border-dashed flex flex-col justify-center items-center border border-gray-300 cursor-pointer hover:border-[#009933] transition-colors gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="sm:size-10 size-7 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>

      <span className="block font-medium text-center text-gray-600">
        Drag and drop your file here
      </span>
      <span className="block text-gray-500 text-sm text-center">
        Supported formats: PDF, PNG, JPG, JPEG
      </span>
      <span className="border block rounded px-4 py-1">Choose file</span>
      <input
        id={id}
        name={id}
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </label>
  );
};

export default FileInput;
