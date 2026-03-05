"use client";

import { useState } from "react";

import { pageSelectors } from "../../constants";
import { useGetOrders } from "../../hooks/useGetOrders";

import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import PageSelector from "@/components/molecules/PageSelector/PageSelector";
import OrderCards from "../OrderCards/OrderCards";
import OrderTableWrapper from "../OrderTableWrapper/OrderTableWrapper";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";

const OrdersWrspper = () => {
  const [selectPage, setSelectPage] = useState("Outgoing");
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleSearch,
    currentPage,
    limit,
    handleClear,
    data,
    isLoading,
    setFilter,
  } = useGetOrders(selectPage);

  return (
    <div className="space-y-6">
      <div className="flex sm:items-center justify-between gap-6  max-sm:flex-col">
        <DashboardTitle
          title="Orders"
          description="Manage and track all your orders"
        />
      </div>
      <PageSelector
        selectPage={selectPage}
        setSelectPage={setSelectPage}
        options={pageSelectors}
      />
      <div className="pt-10">
        <OrderCards
          pending={data?.stats?.pending}
          paid={data?.stats?.paid}
          total={data?.stats?.total}
          received={data?.stats?.received}
          isLoading={isLoading}
          setFilter={setFilter}
        />
      </div>
      {isLoading ? (
        <TableLoader />
      ) : (
        <OrderTableWrapper
          data={data?.data || []}
          totalPages={data?.pagination?.totalPages}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
          search={search}
          handleChange={handleSearchChange}
          handleClear={handleClear}
          onSubmit={handleSearch}
          isLoading={isLoading}
          isBuyer={selectPage === "Outgoing" ? true : false}
        />
      )}
    </div>
  );
};

export default OrdersWrspper;
