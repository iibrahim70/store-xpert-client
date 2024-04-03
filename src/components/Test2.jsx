import { Typewriter } from "react-simple-typewriter";
import { HashLink as NavLink } from "react-router-hash-link";

import { Button } from "./ui/button";
// import MostBenefits from "./MostBenefits";

const Test2 = () => {
  return (
    <>
      <header className="min-h-screen overflow-hidden bg-linear">
        <div className="container flex flex-col items-center justify-center text-center">
          <div className="mt-20">
            {/* <h2 className="leading-snug">
              Build a profitable Digital Product business from Bangladesh in a
              few clicks with ShopBase
            </h2> */}
            <h2 className="leading-snug max-sm:h-[107px] text-slate-800">
              একটি লাভজনক ই-কমার্স ব্যবসা গড়ে তুলুন স্টোর এক্সপার্ট সাথে{" "}
              <span className="bg-gradient-to-r from-indigo-500  to-rose-400 bg-clip-text text-transparent">
                <Typewriter
                  words={["কয়েক ক্লিকে", "সর্বনিম্ন খরচে", "সহজ নিয়ন্ত্রণে!"]}
                  loop={false}
                  typeSpeed={150}
                  deleteSpeed={150}
                  delaySpeed={1500}
                />
              </span>
          </h2>
            <p className="mt-6 md:text-xl md:w-3/5 sm:4/5 mx-auto text-slate-600">
              Say goodbye to app mazes and hello to the all-in-one E-commerce
              solution, allowing you to focus on what truly matters - maximizing
              your profits.
            </p>
            <NavLink to="#templates" smooth>
              <Button className=" mx-auto rounded-full mt-10">
                View Templates
              </Button>
            </NavLink>
          </div>
          <div className="drop-shadow-2xl">
            <img
              className="max-w-md mt-16 "
              src="/src/assets/banners/laptop.svg"
              alt=""
            />
          </div>
          {/* <MostBenefits/> */}
          {/* <div className="grid grid-cols-8 mx-5 mt-16">
          {demos?.map((demo) => (
            <div
              key={demo?._id}
              className={`${demo?._id == 1 ? "" : "-ml-24"}`}>
              <img className="rounded-md h-full shadow-md z-10" src={demo?.img} />
            </div>
          ))}
        </div> */}
        </div>
      </header>
    </>
  );
};

export default Test2;
