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
    <div className="container py-[60px]">
      <div className="flex justify-between items-center">
        <p className="text-[28px]">
          <span className="text-custom-cyan">Products</span> By Category
        </p>

        <div className="flex items-center gap-[60px] text-[19px]">
          {categoriesLoading && <p>Loading...</p>}
          {categoriesError && <p>Something went wrong</p>}

          {categories?.map((category, i) => (
            <div key={category} className="relative">
              <button
                type="button"
                onClick={() => setActiveCategory(i)}
                className={`relative uppercase ${
                  activeCategory === i ? "text-custom-cyan" : "text-black"
                }`}
              >
                {category}
              </button>
              {activeCategory === i && (
                <div className="absolute mt-1 w-full border-b-[3px] border-custom-cyan2"></div>
              )}
            </div>
          ))}

          {categories && (
            <div className="flex items-center gap-5">
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
        {productsFetching && !currentProducts && <p>Loading...</p>}
        {productsError && <p>Something went wrong</p>}
        <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
          <CarouselContent className="">
            {currentProducts?.map((product) => (
              <CarouselItem key={product.id} className="basis-1/6 ">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
