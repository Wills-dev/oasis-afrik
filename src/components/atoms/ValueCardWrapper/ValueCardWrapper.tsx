import Image from "next/image";

import PageSubTitle from "../PageSubTitle/PageSubTitle";

const ValueCardWrapper = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <div className="max-w-[431px] sm:h-[531px] h-fit w-full bg-white sm:px-6 px-4 space-y-6 flex flex-col justify-between rounded-[20px]">
      <div className="space-y-2 sm:pt-6 pt-4">
        <PageSubTitle title={title} />
        <p className="sm:text-lg">{description}</p>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src={imgUrl}
          width={325}
          height={285}
          alt={title}
          className="max-w-[325px] w-full h-[285px] object-cover rounded-t-[20px]"
        />
      </div>
    </div>
  );
};

export default ValueCardWrapper;
