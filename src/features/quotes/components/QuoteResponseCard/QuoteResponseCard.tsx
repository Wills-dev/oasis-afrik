import InfoDisc from "@/components/atoms/InfoDisc/InfoDisc";
import React from "react";

const QuoteResponseCard = ({ isUserBuyer }: { isUserBuyer: boolean }) => {
  return (
    <div className="p-2.5 rounded-[10px] bg-gray-100 hover:bg-[#00993314] transition-all duration-300">
      <h6 className="sm:text-lg font-medium">
        {isUserBuyer ? "Buyer's note" : "Seller's note"}
      </h6>
      <p className="sm:text-sm text-xs text-gray-600">
        Looking for bulk pricing on organic shea butter. Need delivery to Lagos
        by end of month. Can you provide certification?
      </p>
      <InfoDisc title="Requested quantity:" value="5000g" horizontal />
      <InfoDisc title="Proposed amount:" value="$200" horizontal />
      <InfoDisc title="Buyer:" value="John Doe" horizontal />
      <InfoDisc
        title="Delivery address:"
        value="32 Ezekiel Uvoh Crescent"
        horizontal
      />
    </div>
  );
};

export default QuoteResponseCard;
