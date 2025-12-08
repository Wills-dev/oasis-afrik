import Link from "next/link";

import { Quote } from "../../types";
import { formatCreatedAt } from "@/lib/helpers";

import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const QuoteCard = ({ quote }: { quote: Quote }) => {
  return (
    <Link
      href={`/dashboard/quotes/info/${1}`}
      className="w-full p-[16px] rounded-[20px] border border-gray-200 space-y-2 block hover:bg-gray-100 transition-all duration-300"
    >
      <div className="flex md:items-center justify-between max-md:flex-col gap-2">
        <div className="flex items-center gap-2">
          <h6 className="sm:text-lg font-medium truncate whitespace-nowrap">
            {quote?.productName}
          </h6>
          <p className="sm:text-sm text-xs text-gray-400  whitespace-nowrap">
            {quote?.updatedAt && formatCreatedAt(quote?.updatedAt)}
          </p>
        </div>
        <div className="">
          <StatusBubble status={quote?.status} />
        </div>
      </div>
      <p className="text-gray-600 sm:text-sm text-xs whitespace-nowrap truncate">
        {quote?.description}
      </p>
      <div className="flex flex-wrap gap-2">
        <InfoDisc
          title="From:"
          value={`${quote?.buyer?.firstName} ${quote?.buyer?.lastName}`}
          horizontal
        />
        <InfoDisc title="Quantity:" value={quote?.quantity} horizontal />
      </div>
    </Link>
  );
};

export default QuoteCard;
