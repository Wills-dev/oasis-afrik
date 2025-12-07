import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ProductsWrapper from "@/features/products/components/ProductsWrapper/ProductsWrapper";

const ProductPage = () => {
  return (
    <DashboardLayout title="Products">
      <ProductsWrapper />
    </DashboardLayout>
  );
};

export default ProductPage;
