import NewsDetails from "@/components/molecules/NewsDetails/NewsDetails";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

import { use } from "react";

const InsightInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <MainLayout>
      <NewsDetails id={id} />
    </MainLayout>
  );
};

export default InsightInfoPage;
