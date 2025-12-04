import Link from "next/link";

interface AlternativeProps {
  descriptions: string;
  link: string;
  title: string;
}
const Alternative = ({ descriptions, title, link }: AlternativeProps) => {
  return (
    <div className="flex items-center justify-center gap-2 max-sm:text-sm">
      <p className="text-gray-600 ">{descriptions}</p>
      <Link
        href={link}
        className="text-green-600 hover:text-green-700 transition-all font-medium duration-300"
      >
        {title}
      </Link>
    </div>
  );
};

export default Alternative;
