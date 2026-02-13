"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { HistoryProps } from "@/lib/types";

import TableResourceToolbar from "@/components/organisms/TableResourceToolbar/TableResourceToolbar";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

const OrderTableWrapper = ({
  data,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToFirstPage,
  goToLastPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  search,
  handleChange,
  handleClear,
  onSubmit,
  isBuyer,
}: HistoryProps) => {
  const typedColumns = Column(isBuyer) as ColumnDef<unknown>[];

  return (
    <div className="space-y-6 p-6 border border-gray-200 rounded-lg">
      <TableResourceToolbar
        search={search}
        handleChange={handleChange}
        initiateSearch={onSubmit}
        title="Orders"
        handleClear={handleClear}
      />
      <div className="">
        <TableWrapper
          columns={typedColumns}
          data={data}
          totalPages={totalPages}
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

export default OrderTableWrapper;
