"use client";

import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "@/redux/api/products-api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "@/components/cards/category-card";
import CategoriesSkeleton from "@/components/skeletons/categories-skeleton";

const categoryImages: { [key: string]: string } = {
  electronics: "/images/categories/electronics.png",
  jewelery: "/images/categories/jewelry.webp",
  "men's clothing": "/images/categories/mens-clothing.webp",
  "women's clothing": "/images/categories/womens-clothing.webp",
};

export default function Categories() {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  const [categories, setCategories] = useState<
    { name: string; image: string }[]
  >([]);

  useEffect(() => {
    if (data) {
      const categoriesWithImages = data.map((category) => ({
        name: category,
        image: categoryImages[category] || "/images/not-available.webp",
      }));
      setCategories(categoriesWithImages);
    }
  }, [data]);

  return (
    <div className="bg-[linear-gradient(#F8F5D6,#ffffff,#ffffff)]">
      <div className="py-2 container">
        {isLoading && <CategoriesSkeleton />}
        {isError && (
          <p className="h-[200px] flex justify-center items-center text-lg">
            Something went wrong
          </p>
        )}
        {categories.length > 0 && (
          <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
            <CarouselContent className="mx-auto -ml-3 lg:ml-0 py-2">
              {categories.map((category, i) => (
                <CarouselItem
                  key={i}
                  className="basis-3/4 lg:basis-1/4 ml-3 lg:ml-0"
                >
                  <CategoryCard
                    name={category.name}
                    imageSrc={category.image}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <span className="hidden lg:block">
              <CarouselPrevious />
              <CarouselNext />
            </span>
          </Carousel>
        )}

        <div className="mt-9 border-b border-gray-300" />
      </div>
    </div>
  );
}
