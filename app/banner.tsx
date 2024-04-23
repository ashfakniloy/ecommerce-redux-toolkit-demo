"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const slides = [
  {
    name: "slide 1",
    title: (
      <span className="">
        Shop{" "}
        <span className="text-custom-cyan3">
          Computer <br /> & experience
        </span>
      </span>
    ),
    description: (
      <p>
        You cannot inspect quality into the product; it is already there. <br />
        I am not a product of my circumstances. I am a product of my decisions.
      </p>
    ),
    image: "/images/banner.png",
    link: "/#offer-1",
    discount: "40% off",
  },
  {
    name: "slide 2",
    title: (
      <span className="">
        Shop{" "}
        <span className="text-custom-cyan3">
          Computer <br /> & experience 2
        </span>
      </span>
    ),
    description: (
      <p>
        You cannot inspect quality into the product; it is already there. <br />
        I am not a product of my circumstances. I am a product of my decisions.
      </p>
    ),
    image: "/images/banner.png",
    link: "/#offer-3",
    discount: "25% off",
  },
  {
    name: "slide 3",
    title: (
      <span className="">
        Shop{" "}
        <span className="text-custom-cyan3">
          Computer <br /> & experience 3
        </span>
      </span>
    ),
    description: (
      <p>
        You cannot inspect quality into the product; it is already there. <br />
        I am not a product of my circumstances. I am a product of my decisions.
      </p>
    ),
    image: "/images/banner.png",
    link: "/#offer-2",
    discount: "10% off",
  },
];

export default function Banner() {
  return (
    <div className="">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="relative px-0">
              <div className="relative w-full h-[300px] lg:h-[418px]">
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="container h-full">
                  <div className="absolute h-full mx-5 lg:mx-0 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-[57px] lg:leading-[53px]">
                      {slide.title}
                    </h1>

                    <div className="mt-2 text-[13px]">{slide.description}</div>

                    <Button className="mt-2">View More</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselDots itemsLength={slides.length} />
      </Carousel>
    </div>
  );
}
