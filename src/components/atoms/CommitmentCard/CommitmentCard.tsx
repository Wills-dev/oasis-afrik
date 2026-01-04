import Image from "next/image";

const CommitmentCard = ({
  imgUrl,
  content,
  title,
}: {
  imgUrl: string;
  content: string;
  title: string;
}) => {
  return (
    <div className="min-w-[260px] w-full max-w-[405px] rounded-[20px] sm:p-6 py-6 px-4 bg-gray-50 space-y-4">
      <div className="bg-[#0099331A] rounded-full w-[60px] min-w-[60px] h-[60px] flex justify-center items-center">
        <Image
          src={imgUrl}
          alt="icon"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <h6 className="sm:text-xl text-lg font-medium">{title}</h6>
        <p className="max-sm:text-sm text-[#848484]">{content}</p>
      </div>
    </div>
  );
};

export default CommitmentCard;
