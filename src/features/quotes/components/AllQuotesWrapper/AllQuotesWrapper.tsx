"use client";

import { useGetQuotes } from "../../hooks/useGetQuotes";

import TableResourceToolbar from "@/components/organisms/TableResourceToolbar/TableResourceToolbar";
import PaginationComponent from "@/components/molecules/PaginationComponent/PaginationComponent";
import QuoteCard from "../QuoteCard/QuoteCard";

const AllQuotesWrapper = () => {
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
    // data,
    // isPending,
    // isLoading,
    // isError,
    // error,
    // refetch,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    filter,
    setFilter,
    quotes,
  } = useGetQuotes();

  return (
    <div className="max-w-4xl space-y-6">
      <TableResourceToolbar
        search={search}
        handleChange={handleSearchChange}
        initiateSearch={handleSearch}
        filter={filter}
        setFilter={setFilter}
        title=""
        handleClear={handleClear}
      />
      <div className="space-y-4">
        {quotes?.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
      <PaginationComponent
        totalPages={1}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToLastPage={goToLastPage}
        goToFirstPage={goToFirstPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
      />
    </div>
  );
};

export default AllQuotesWrapper;
