"use client";

import { ArrowRightIcon, Search } from "lucide-react";

import DashboardTitle from "@/components/molecules/DashboardTitle/DashboardTitle";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import ProductCardLoader from "@/components/atoms/skeletonLoader/ProductCardLoader";

import { numberWithCommas } from "@/lib/helpers";
import { ProductType } from "@/features/products/types";
import { useGetProducts } from "@/features/products/hooks/useGetProducts";

const MarketplaceWrapper = () => {
  const {
    products,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    search,
    handleSearchChange,
    handleSearch,
    // filter,
    // setFilter,
  } = useGetProducts();

  return (
    <div className="space-y-6">
      <DashboardTitle
        title="Marketplace"
        description="Discover products from verified african producers"
      />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <form
            onSubmit={handleSearch}
            className="max-w-md w-full h-10 rounded-full border border-gray-200 focus-within:border-green-500 transition-all duration-300 px-2 flex items-center gap-2 text-gray-500"
          >
            <button className="text-gray-400" type="submit">
              <Search className="w-6 h-6" />
            </button>
            <input
              type="search"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="outline-none w-full flex-1 h-full"
              placeholder="Search products"
            />
          </form>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-8">
        {isLoading ? (
          <ProductCardLoader />
        ) : (
          <>
            {products?.map((prod: ProductType) => {
              const formatedPrice =
                prod?.price && numberWithCommas(Number(prod?.price));

              return (
                <ProductCard
                  key={prod?.id}
                  productId={prod?.id}
                  productName={prod?.name}
                  price={formatedPrice}
                  unit={prod?.quantityUnit?.abbreviation}
                  businessName={"Kenyan highlands Co."}
                  rating="4.5"
                  currency={prod?.currency || "₦"}
                  productImg={prod?.mainImage}
                />
              );
            })}
          </>
        )}
      </div>
      {hasNextPage && (
        <div className="flex justify-center w-full">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-5 py-2.5 border rounded-full flex items-center gap-1 hover:bg-white duration-300 transition-all"
          >
            {isFetchingNextPage ? "Loading..." : "See More"}{" "}
            <ArrowRightIcon className="w-6 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketplaceWrapper;
