import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const InsightCard = ({
  imgUrl,
  title,
  content,
  id,
}: {
  imgUrl: string;
  title: string;
  content: string;
  id: string;
}) => {
  return (
    <div className="max-w-[413px] w-full min-w-[280px] rounded-[20px] overflow-hidden bg-white hover:bg-green-50 transition-all duration-300">
      <div className="w-full sm:h-[250px] h-[200px]">
        <Image
          src={imgUrl}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:p-6 py-6 px-4 space-y-4">
        <h6 className="font-medium truncate whitespace-nowrap sm:text-xl text-lg">
          {title}
        </h6>
        <p className="max-sm:text-sm">{content}</p>
        <Link
          href={`/insights/info/${id}`}
          className="flex items-center gap-2 text-[#009933] hover:text-green-800 transition-all duration-300"
        >
          View insight <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default InsightCard;
