import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import OrdersWrspper from "@/features/orders/components/OrdersWrapper/OrdersWrspper";

const OrdersPage = () => {
  return (
    <DashboardLayout title="Orders">
      <OrdersWrspper />
    </DashboardLayout>
  );
};

export default OrdersPage;
