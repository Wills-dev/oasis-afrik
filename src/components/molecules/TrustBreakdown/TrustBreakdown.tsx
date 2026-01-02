import TurstBubble from "@/components/atoms/TurstBubble/TurstBubble";
import Image from "next/image";

const TrustBreakdown = () => {
  return (
    <div className="relative sm:max-w-[502px] max-w-[270px]  w-full sm:h-[610px] h-[340px]">
      <Image
        src="/assets/images/trust-img.jpg"
        alt="trust-img"
        width={502}
        height={610}
        className="rounded-[20px] w-full h-full object-cover"
      />
      <TurstBubble
        imgUrl="/assets/icons/dollar.svg"
        title="Secure Escrow Payments"
        className="sm:-left-[79px] -left-4 sm:top-32 top-6"
      />
      <TurstBubble
        imgUrl="/assets/icons/van.svg"
        title="Swift delivery"
        className="sm:-left-[79px] -left-4 sm:bottom-20 bottom-20"
      />
      <TurstBubble
        imgUrl="/assets/icons/money.svg"
        title="Verified Sellers "
        className="sm:-right-[79px] -right-4 sm:top-40 top-20"
      />
      <TurstBubble
        imgUrl="/assets/icons/box.svg"
        title=" Authentic Products"
        className="sm:-right-[79px] -right-4 sm:bottom-24 bottom-6"
      />
    </div>
  );
};

export default TrustBreakdown;
