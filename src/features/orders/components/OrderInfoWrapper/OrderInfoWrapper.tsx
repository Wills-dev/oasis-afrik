"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { useGetOrderInfo } from "../../hooks/useGetOrderInfo";

import BackButton from "@/components/atoms/BackButton/BackButton";
import OrderSteps from "../OrderSteps/OrderSteps";
import ProductDetails from "../ProductDetails/ProductDetails";
import UserSummary from "../UserSummary/UserSummary";
import PaymentWarning from "@/components/molecules/PaymentWarning/PaymentWarning";
import OrderPaymentSummary from "../OrderPaymentSummary/OrderPaymentSummary";
import InfoSkeleton from "@/components/atoms/skeletonLoader/InfoSkeleton";

const OrderInfoWrapper = ({ orderId }: { orderId: string }) => {
  const { user, isLoading: loading } = useSelector(
    (state: RootState) => state.auth,
  );
  const { data, isLoading } = useGetOrderInfo(orderId);

  const isSeller = user?.id === data?.seller?.id;

  const isFetching = isLoading || loading;

  return (
    <div className="space-y-6">
      <BackButton />
      {isFetching ? (
        <InfoSkeleton />
      ) : (
        <>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <OrderSteps data={data} />
              <OrderPaymentSummary data={data} />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <ProductDetails data={data} />
              <div className="grid md:grid-cols-2 gap-6">
                <UserSummary
                  title="Buyer Delivery Information"
                  firstName={data?.buyer.firstName}
                  lastName={data?.buyer.lastName}
                  email={data?.buyer.email}
                  emailVerified={true}
                  address={data?.address}
                />
                <UserSummary
                  title="Seller Information"
                  firstName={data?.seller.firstName}
                  lastName={data?.seller.lastName}
                  email={data?.seller.email}
                  emailVerified={data?.seller.emailVerified}
                />
              </div>
            </div>
          </div>
          {isSeller && <PaymentWarning />}
        </>
      )}
    </div>
  );
};

export default OrderInfoWrapper;
