import Link from "next/link";

import Container from "@/components/atoms/Container/Container";
import ProductCard from "@/components/atoms/ProductCard/ProductCard";
import ProductTitle from "@/components/atoms/ProductTitle/ProductTitle";

import { agroProducts } from "@/features/products/constants/dummy";
import { ArrowRightIcon } from "lucide-react";

const ProductionSection = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="flex justify-center flex-col items-center sm:pt-20 gap-10 w-full">
          <div className="max-w-[900px] w-full flex flex-col justify-center items-center gap-2">
            <ProductTitle />
          </div>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {agroProducts?.slice(0, 8).map((prod) => (
              <ProductCard
                key={prod?.id}
                productId={prod?.id}
                productName={prod?.productName}
                price={prod?.price}
                unit="ton"
                businessName="Kenyan highlands Co."
                rating="4.5"
                productImg="/assets/dummy/prodImg1.jpg"
              />
            ))}
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
