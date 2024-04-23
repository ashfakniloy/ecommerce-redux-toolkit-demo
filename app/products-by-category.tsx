"use client";

import { useState } from "react";
import ProductCard from "@/components/cards/product-card";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/redux/api/products-api";
import ProductsSkeleton from "@/components/skeletons/products-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsByCategory() {
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategoriesQuery();

  const [activeCategory, setActiveCategory] = useState(0);

  const {
    isError: productsError,
    isFetching: productsFetching,
    currentData: currentProducts,
  } = useGetProductsByCategoryQuery(categories?.[activeCategory] || "");

  const handlePrevCategory = () => {
    setActiveCategory((prev) =>
      prev === 0 ? (categories?.length || 0) - 1 : prev - 1
    );
  };

  const handleNextCategory = () => {
    setActiveCategory((prev) =>
      prev === (categories?.length || 0) - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container py-8 lg:py-[60px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <p className="text-[28px]">
          <span className="text-custom-cyan">Products</span> By Category
        </p>

        <div className="mt-5 lg:mt-2 lg:flex items-center gap-[60px] text-base lg:text-[19px]">
          {categoriesLoading && (
            <Skeleton className="w-full lg:w-[833px] h-[31px]" />
          )}
          {categoriesError && <p>Something went wrong</p>}

          {categories && (
            <Carousel
              opts={{ align: "start", skipSnaps: true, dragFree: true }}
              className=""
            >
              <CarouselContent className="h-[31px] lg:w-[770px] -mr-10">
                {categories.map((category, i) => (
                  <CarouselItem
                    key={category}
                    className="basis-2.5/6 lg:basis-auto pr-10"
                  >
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setActiveCategory(i)}
                        className={`relative uppercase ${
                          activeCategory === i
                            ? "text-custom-cyan"
                            : "text-black"
                        }`}
                      >
                        {category}
                      </button>
                      {activeCategory === i && (
                        <div className="absolute mt-1 w-full border-b-[3px] border-custom-cyan2"></div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}

          {categories && (
            <div className="hidden lg:flex items-center gap-5">
              <button
                type="button"
                onClick={handlePrevCategory}
                disabled={activeCategory === 0}
                className="disabled:opacity-30"
              >
                <ChevronLeft className="size-3.5 fill-black" />
              </button>
              <button
                type="button"
                onClick={handleNextCategory}
                disabled={activeCategory === categories.length - 1}
                className="disabled:opacity-30"
              >
                <ChevronRight className="size-3.5 fill-black" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[30px]">
        {productsFetching && !currentProducts && <ProductsSkeleton />}
        {productsError && (
          <p className="h-[285px] flex justify-center items-center text-lg">
            Something went wrong
          </p>
        )}
        {currentProducts && (
          <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
            <CarouselContent className="">
              {currentProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-3/6 lg:basis-1/6 "
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
