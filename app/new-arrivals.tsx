"use client";

import ProductCard from "@/components/cards/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetProductsQuery } from "@/redux/api/products-api";

export default function NewArrivals() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <div className="container py-[60px]">
      <p className="text-[28px]">
        <span className="text-custom-cyan">New</span> Arrivals
      </p>

      <div className="mt-[30px]">
        {isLoading && <p className="text-center">Loading...</p>}
        {isError && <p className="text-center">Something went wrong</p>}
        {products && (
          <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
            <CarouselContent className="">
              {products.map((product) => (
                <CarouselItem key={product.id} className="basis-1/6 ">
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
