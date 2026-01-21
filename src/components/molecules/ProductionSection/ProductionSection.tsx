"use client";

import Link from "next/link";

import Container from "@/components/atoms/Container/Container";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import ProductTitle from "@/components/atoms/ProductTitle/ProductTitle";
import ProductCardLoader from "@/components/atoms/skeletonLoader/ProductCardLoader";

import { ArrowRightIcon } from "lucide-react";
import { useGetProducts } from "@/features/products/hooks/useGetProducts";
import { ProductType } from "@/features/products/types";
import { numberWithCommas } from "@/lib/helpers";

const ProductionSection = () => {
  const { products, isLoading } = useGetProducts();

  return (
    <section className="pb-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10 w-full">
          <div className="max-w-[900px] w-full flex flex-col justify-center items-center gap-2">
            <ProductTitle />
          </div>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {isLoading ? (
              <ProductCardLoader />
            ) : (
              <>
                {products?.slice(0, 8).map((prod: ProductType) => {
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
          <div className="flex justify-center w-full">
            <Link
              href="/dashboard/marketplace"
              className="px-5 py-2.5 border rounded-full flex items-center gap-1 hover:bg-white duration-300 transition-all"
            >
              See more <ArrowRightIcon className="w-6 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductionSection;
