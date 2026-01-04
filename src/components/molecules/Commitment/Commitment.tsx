import CommitmentCard from "@/components/atoms/CommitmentCard/CommitmentCard";
import CommitmentTitle from "@/components/atoms/CommitmentTitle/CommitmentTitle";
import PageSubTitle from "@/components/atoms/PageSubTitle/PageSubTitle";

import { commitmentContents } from "@/lib/constants";

const Commitment = () => {
  return (
    <section className="bg-white rounded-[20px] px-6 py-20">
      <div className="flex justify-center flex-col items-center  gap-10">
        <div className="max-w-[528px] w-full flex flex-col justify-center items-center gap-2">
          <PageSubTitle title="Commitment" />
          <CommitmentTitle />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {commitmentContents?.map((content) => (
            <CommitmentCard
              key={content?.title}
              title={content?.title}
              content={content?.content}
              imgUrl={content?.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
