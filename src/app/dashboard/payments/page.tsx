import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import PaymentWrapper from "@/features/payment/components/PayementWrapper/PaymentWrapper";

const PaymentsPage = () => {
  return (
    <DashboardLayout title="Payments">
      <PaymentWrapper />
    </DashboardLayout>
  );
};

export default PaymentsPage;
