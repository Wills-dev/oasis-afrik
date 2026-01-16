"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/store";

import Button from "@/components/atoms/Button/Button";
import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import ScreenDisplayUnverifiedUser from "@/components/organisms/ScreenDisplayUnverifiedUser/ScreenDisplayUnverifiedUser";
import ProductTableWrapper from "../ProductTableWrapper/ProductTableWrapper";
import ProductCards from "../ProductCards/ProductCards";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

const ProductsWrapper = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  const isCompanyVerified = user?.isCompanyVerified;

  return (
    <div>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          {isCompanyVerified ? (
            <div className="space-y-6">
              <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
                <DashboardTitle
                  title="Products"
                  description="Manage your product catalog"
                />
                <Button href="/dashboard/products/new" width="w-fit">
                  Add a product
                </Button>
              </div>
              <div className="pt-10">
                <ProductCards />
              </div>
              <ProductTableWrapper />
            </div>
          ) : (
            <ScreenDisplayUnverifiedUser />
          )}
        </>
      )}
    </div>
  );
};

export default ProductsWrapper;
