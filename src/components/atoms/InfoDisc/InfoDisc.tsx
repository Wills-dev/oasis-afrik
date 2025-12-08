import { StarIcon } from "lucide-react";

interface InfoDiscProps {
  title: string;
  value: string;
  rating?: boolean;
  horizontal?: boolean;
}

const InfoDisc = ({ title, value, rating, horizontal }: InfoDiscProps) => {
  return (
    <div
      className={`space-y-1 max-sm:text-sm ${
        horizontal && "flex items-center gap-2 flex-wrap"
      }`}
    >
      <h6 className="text-gray-400">{title}</h6>
      <div className="flex items-center gap-1 ">
        {rating && <StarIcon className="w-4 h-4 text-yellow-500" />}
        <p className="">{value}</p>
      </div>
    </div>
  );
};

export default InfoDisc;
