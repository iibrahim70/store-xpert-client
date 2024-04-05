
import { Button } from "./ui/button";
// import MostBenefits from "./MostBenefits";

const Test2 = () => {
  return (
    <header className="relative bg-[url('/src/assets/banners/hero1.jpg')]   rounded-full h-[550px] bg-fixed bg-cover bg-no-repeat bg-orange-200">
    <div className="absolute flex flex-col items-center justify-center top-0 left-0 right-0 h-full bg-slate-950 bg-opacity-45">
      <h2 className="text-white text-center leading-tight">
        ই-কমার্স ব্যবসা এখন <br />
        হাতের মুঠোয়
      </h2>
      <p className="text-gray-50 text-lg mt-3 mb-2">একটি লাভজনক অনলাইন ব্যবসা গড়তে আপনার যেটি প্রয়োজন</p>
      <Button >View Demo</Button>
    </div>
  </header>
  );
};

export default Test2;
