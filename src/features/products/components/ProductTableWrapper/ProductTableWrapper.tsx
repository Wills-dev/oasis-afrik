"use client";

import { ColumnDef } from "@tanstack/react-table";

import TableResourceToolbar from "@/components/organisms/TableResourceToolbar/TableResourceToolbar";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

import { agroProducts } from "../../constants/dummy";
import { Column } from "./Column";
import { useGetProducts } from "../../hooks/useGetProducts";

const ProductTableWrapper = () => {
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
    // data,
    // isPending,
    // isLoading,
    // isError,
    // error,
    // refetch,
    filter,
    setFilter,
  } = useGetProducts();

  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <div className="space-y-6 p-[24px] border border-gray-200 rounded-lg">
      <TableResourceToolbar
        search={search}
        handleChange={handleSearchChange}
        initiateSearch={handleSearch}
        filter={filter}
        setFilter={setFilter}
        title="Products"
        handleClear={handleClear}
      />
      <div className="">
        <TableWrapper
          columns={typedColumns}
          data={agroProducts}
          totalPages={1}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

export default ProductTableWrapper;
