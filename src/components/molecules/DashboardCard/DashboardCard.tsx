import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

interface DashboardCardProps {
  title: string;
  value: string;
  icon: string;
  percentage: number;
  percentageState: "positive" | "negative";
}

const DashboardCard = ({
  title,
  value,
  icon,
  percentage,
  percentageState,
}: DashboardCardProps) => {
  return (
    <div className="rounded-md p-2 border border-gray-200  flex-1 w-full min-w-[270px] h-[165px] flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h6 className="max-sm:text-sm text-gray-600">{title}</h6>
        <div className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-gray-100 flex justify-center items-center">
          <Image src={icon} alt="icon" width={21} height={21} />
        </div>
      </div>
      <div className="">
        <p className="sm:text-xl text-lg font-medium">{value}</p>
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              percentageState === "positive"
                ? "bg-green-50 text-green-400"
                : "bg-red-50 text-red-400"
            }`}
          >
            {percentageState === "positive" ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <p className="text-xs">{percentage}%</p>
          </div>
          <p className="text-xs text-gray-400">Since last week</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
