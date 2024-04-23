import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "@/components/cards/category-card";

const categoriesData = [
  {
    name: "Electronics",
    image: "/images/categories/electronics.png",
  },
  {
    name: "Fashion",
    image: "/images/categories/fashion.png",
  },
  {
    name: "Appliances",
    image: "/images/categories/appliances.png",
  },
  {
    name: "Babies Store",
    image: "/images/categories/babies-store.png",
  },
  {
    name: "Fashion",
    image: "/images/categories/fashion.png",
  },
  {
    name: "Appliances",
    image: "/images/categories/appliances.png",
  },
  {
    name: "Babies Store",
    image: "/images/categories/babies-store.png",
  },
];

export default function Categories() {
  return (
    // <div className="bg-[linear-gradient(#f3edc9,#ffffff,#ffffff)]">
    <div className="bg-[linear-gradient(#F8F5D6,#ffffff,#ffffff)]">
      <div className="py-4 container">
        <Carousel opts={{ align: "start", skipSnaps: true, dragFree: true }}>
          <CarouselContent className="mx-auto">
            {categoriesData.map((category, i) => (
              <CarouselItem key={i} className="basis-1/4 ">
                <CategoryCard name={category.name} imageSrc={category.image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-9 border-b border-gray-300" />
      </div>
    </div>
  );
}
