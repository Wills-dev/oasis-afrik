const SolutionCardWrapper = ({
  bgUrl,
  mapImg,
  title,
  breakdown,
}: {
  bgUrl?: string;
  mapImg?: string;
  title: string;
  breakdown: string[];
}) => {
  return (
    <div
      className={`flex-1 w-full min-w-[300px] bg-no-repeat bg-cover bg-center h-full rounded-[20px] overflow-hidden bg-[#009933] relative flex flex-col justify-between`}
      style={{ backgroundImage: bgUrl ? `url('${bgUrl}')` : "none" }}
    >
      <div
        className="sm:h-[318px] h-[200px] mt-4 w-full bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: mapImg ? `url('${mapImg}')` : "none" }}
      ></div>
      <div
        className={`space-y-2 sm:px-6 p-4 pt-8 ${
          bgUrl ? "bg-linear-to-t from-black/95 to-black/40" : ""
        }`}
      >
        <h6 className="md:text-4xl text-2xl font-medium text-white w-full">
          {title}
        </h6>
        <ul className="pl-4">
          {breakdown?.map((item) => (
            <li key={item} className="list-disc text-white max-sm:text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SolutionCardWrapper;
