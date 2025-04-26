"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const FeaturedBanner = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="relative overflow-hidden bg-black rounded-lg w-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12 text-white z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  iPhone 14 Series
                </h2>
                <p className="text-xl md:text-2xl mb-6">Up to 10% off</p>
                <Button variant="link" className="text-white pl-0 flex items-center group">
                  Shop Now 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/Frame 560.png" 
                  alt="iPhone 14 Series" 
                  className="max-h-[300px] md:max-h-[400px] object-contain mx-auto"
                />
              </div>
            </div>
          </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
};

export default FeaturedBanner;
