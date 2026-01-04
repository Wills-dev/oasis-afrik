import ApproachCard from "@/components/atoms/ApproachCard/ApproachCard";

import { approachContents } from "@/lib/constants";

const ApproachCardWrapper = () => {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {approachContents?.map((content) => (
        <ApproachCard
          key={content?.content}
          content={content?.content}
          imgUrl={content?.imgUrl}
        />
      ))}
    </div>
  );
};

export default ApproachCardWrapper;
