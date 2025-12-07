import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import NewProductWrapper from "@/features/products/components/NewProductWrapper/NewProductWrapper";

const NewProductPage = () => {
  return (
    <DashboardLayout title="Products">
      <NewProductWrapper />
    </DashboardLayout>
  );
};

export default NewProductPage;
