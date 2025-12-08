import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import QuoteWrapper from "@/features/quotes/components/QuoteWrapper/QuoteWrapper";

const QuotePage = () => {
  return (
    <DashboardLayout title="Quotes">
      <QuoteWrapper />
    </DashboardLayout>
  );
};

export default QuotePage;
