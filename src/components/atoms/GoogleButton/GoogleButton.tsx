import Image from "next/image";

const GoogleButton = () => {
  return (
    <button className="w-full flex items-center gap-2 justify-center sm:h-12 h-11 border border-gray-200 rounded-md">
      <Image
        src="/assets/icons/google.svg"
        alt="google-icon"
        width={24}
        height={24}
        className="object-obtain"
      />
      <p className="sm:text-lg font-medium">Continue with google</p>
    </button>
  );
};

export default GoogleButton;
