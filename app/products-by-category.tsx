"use client";

import ProductCard from "@/components/cards/product-card";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function ProductsByCategory() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByCategory = async (categoryName: string) => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );

      const data = await response.json();

      if (response.ok) {
        setProducts(data);
      } else {
        console.log("error", data);
      }
    };

    getProductsByCategory(categories[activeCategory]);

    console.log("products", products);
  }, [activeCategory]);

  const handlePrevCategory = () => {
    setActiveCategory((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNextCategory = () => {
    setActiveCategory((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container py-[60px]">
      <div className="flex justify-between items-center">
        <p className="text-[28px]">
          <span className="text-custom-cyan">Products</span> By Category
        </p>

        <div className="flex items-center gap-[60px] text-[19px]">
          {categories.map((category, i) => (
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
        </div>
      </div>

      <div className="mt-[30px]">
        <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
          <CarouselContent className="">
            {products.map((product: any) => (
              <CarouselItem key={product.id} className="basis-1/6 ">
                <ProductCard
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
