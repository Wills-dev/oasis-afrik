import Image from "next/image";

const TurstBubble = ({
  imgUrl,
  title,
  className = "",
}: {
  imgUrl: string;
  title: string;
  className: string;
}) => {
  return (
    <div
      className={`absolute rounded-full shadow-xl bg-[#F5F5F5] sm:p-4 p-2 flex items-center justify-center gap-2 border border-white ${className}`}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={40}
        height={40}
        className="object-contain max-sm:h-5 max-sm:w-5"
      />
      <p className="text-center font-medium sm:text-lg text-sm">{title}</p>
    </div>
  );
};

export default TurstBubble;
