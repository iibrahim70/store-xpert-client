import { HashLink as NavLink } from "react-router-hash-link";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ShortFeatures from "./ShortFeatures";

const services = [
  {
    title: "কোডিং দক্ষতা ছাড়াই সাজিয়ে নিন নিজের অনলাইন ওয়েবসাইট",
  },
  {
    title: "Built-in payments solutions.",
  },
  {
    title: "Social Media Marketing Support",
  },
  {
    title: "Search Engine Optimization (SEO) Support",
  },
  {
    title: "High-quality inventory management.",
  },
  {
    title: "Our 24/7 customer support team is always here to assist",
  },
];

// [#A4EAC0]

// slider images
const images = [
  {
    url: "https://prompt-ng.coderthemes.com/assets/images/hero/saas3.jpg",
  },
  {
    url: "https://prompt-ng.coderthemes.com/assets/images/hero/saas2.jpg",
  },
  {
    url: "https://prompt-ng.coderthemes.com/assets/images/hero/saas3.jpg",
  },
];

const Test2 = () => {
  return (
    <>
      <header className="relative bg-slate-100 lg:h-[calc(100dvh-73px)]  overflow-hidden flex justify-center items-center">
        <div className="container max-lg:mt-16 pb-20 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center">
          {/* description */}
          <div>
            <h3 className="leading-snug text-slate-800">
              একটি লাভজনক ই-কমার্স ব্যবসা গড়ে তুলুন{" "}
              <span className="bg-gradient-to-r from-indigo-400  to-purple-300 bg-clip-text text-transparent">
                <Typewriter
                  words={["কয়েক ক্লিকে", "সর্বনিম্ন খরচে", "সহজ নিয়ন্ত্রণে!"]}
                  loop={false}
                  typeSpeed={150}
                  deleteSpeed={150}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            <ul className="grid grid-cols-1 gap-4 lg:mt-8 mt-5 font-medium max-sm:text-sm text-slate-600">
              {services.map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <IoCheckmarkCircle className="text-primary w-5 h-5" />

                  <p>{service.title}</p>
                </li>
              ))}
            </ul>
            <NavLink to="#templates" smooth>
              <Button className=" mx-auto rounded-full mt-10">
                View Templates
              </Button>
            </NavLink>
          </div>

          {/* slider */}
          <div className="">
            <Carousel className="w-full lg:drop-shadow-2xl rounded-xl overflow-hidden drop-shadow-md max-w-xl z-10">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <img className="" src={img?.url} alt="demo img" />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </header>
      <img
        className="w-16 h-16 object-cover absolute z-0 bottom-16 left-2/4 translate-x-2/4"
        src="https://prompt-ng.coderthemes.com/assets/images/pattern/dot2.svg"
        alt=""
      />
      <img
        className="w-16 h-16 object-cover absolute z-0 top-36 right-44 rotate-45"
        src="https://prompt-ng.coderthemes.com/assets/images/pattern/dot2.svg"
        alt=""
      />
      <div className="-mt-20">
        <ShortFeatures />
      </div>
    </>
  );
};

export default Test2;
