import { optionsType } from "@/lib/types";

interface PageSelectorProps {
  selectPage: string;
  setSelectPage: (selectPage: string) => void;
  options: optionsType[];
}

const PageSelector = ({
  selectPage,
  setSelectPage,
  options,
}: PageSelectorProps) => {
  return (
    <div className="flex items-center  w-fit p-1 bg-gray-100 rounded-[10px]">
      {options?.map((label) => (
        <div
          key={label?.label}
          className={`py-2 px-4 rounded-[10px] cursor-pointer capitalize  max-sm:text-sm font-medium hover:scale-105 transition-all duration-300 ${
            selectPage === label?.value ? "bg-white" : "text-gray-600"
          }`}
          onClick={() => setSelectPage(label?.value.toString())}
        >
          <span className="text-center">{label?.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PageSelector;
