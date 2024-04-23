import ProductCard from "@/components/cards/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Suspense } from "react";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return data;
}

async function Products() {
  const products = (await getProducts())?.slice(0, 10);

  return (
    <div className="">
      <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
        <CarouselContent className="">
          {products.map((product: any) => (
            <CarouselItem key={product.id} className="basis-1/6 ">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default function NewArrivals() {
  return (
    <div className="container py-[60px]">
      <p className="text-[28px]">
        <span className="text-custom-cyan">New</span> Arrivals
      </p>

      <div className="mt-[30px]">
        <Suspense fallback={"Loading..."}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
