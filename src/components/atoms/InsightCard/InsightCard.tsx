import Link from "next/link";

import { formatCreatedAt } from "@/lib/helpers";

const InsightCard = ({
  title,
  author,
  id,
  date,
}: {
  title: string;
  author: string;
  id: string;
  date: string;
}) => {
  return (
    <div className="max-w-[413px] w-full min-w-[280px] rounded-[20px] overflow-hidden bg-white hover:bg-green-50 transition-all duration-300">
      <div className="sm:p-6 py-6 px-4 space-y-4">
        <div className="space-y-2">
          <p className="text-xs">{date && formatCreatedAt(date)}</p>
          <Link
            href={`/insights/info/${id}`}
            className="font-bold sm:text-xl text-lg hover:text-green-800 hover:underline transition-all duration-300"
          >
            {title}
          </Link>
          {/* <Link
            href={`/insights/info/${id}`}
            className="flex items-center gap-2 text-[#009933] hover:text-green-800 transition-all duration-300"
          >
            View insight <ArrowRight className="w-5 h-5" />
          </Link> */}
        </div>
        <div className="">
          <p className="font-medium text-sm">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
