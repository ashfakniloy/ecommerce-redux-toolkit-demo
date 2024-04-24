"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { bannerSlides } from "@/components/banner-slides";

export default function Banner() {
  return (
    <section>
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
          {bannerSlides.map((slide, i) => (
            <CarouselItem key={i} className="relative px-0">
              <div className="relative w-full h-[300px] lg:h-[418px]">
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <span className="absolute top-5 right-5 lg:top-16 lg:right-[220px] size-[100px] lg:size-[165px] rounded-full text-center p-3 flex justify-center items-center leading-tight text-[30px] lg:text-[45px] text-white bg-gradient-to-r from-[#FDC830] to-[#F37335]">
                  {slide.discount}
                  <br />
                  Off
                </span>

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

        <CarouselDots itemsLength={bannerSlides.length} />
      </Carousel>
    </section>
  );
}
