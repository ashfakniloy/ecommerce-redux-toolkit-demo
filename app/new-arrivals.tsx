"use client";

import ProductCard from "@/components/cards/product-card";
import ProductsSkeleton from "@/components/skeletons/products-skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetProductsQuery } from "@/redux/api/products-api";

export default function NewArrivals() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <div className="container py-8 lg:py-[60px]">
      <p className="text-[28px]">
        <span className="text-custom-cyan">New</span> Arrivals
      </p>

      <div className="mt-[30px]">
        {isLoading && <ProductsSkeleton />}
        {isError && (
          <p className="h-[285px] flex justify-center items-center text-lg">
            Something went wrong
          </p>
        )}
        {products && (
          <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
            <CarouselContent className="">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-3/6 lg:basis-1/6"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
}
