import Image from "next/image";

const ApproachCard = ({
  imgUrl,
  content,
}: {
  imgUrl: string;
  content: string;
}) => {
  return (
    <div className="max-w-[310px] w-full min-w-[300px] rounded-[20px] sm:p-6 px-4 space-y-2 bg-white">
      <div className="bg-[#0099331A] rounded-full w-[60px] min-w-[60px] h-[60px] flex justify-center items-center">
        <Image
          src={imgUrl}
          alt="icon"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <p className="sm:text-xl text-lg">{content}</p>
    </div>
  );
};

export default ApproachCard;
