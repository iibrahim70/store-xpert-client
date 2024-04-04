import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

const imageUrls = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const TemplateHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleSlideChange = (index) => {
    console.log(index)
    setCurrentIndex(index);
  };

  return (
    <Carousel
      className="container w-full my-20"
      onSlideChange={handleSlideChange}>
      <CarouselContent className="-ml-1">
        {imageUrls.map((url, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex rounded-xl items-center justify-center">
                  <img
                    className={` rounded-xl ${
                      index === currentIndex ? "" : " "
                    }`}
                    src={url}
                    alt={`Slide ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TemplateHighlights;
