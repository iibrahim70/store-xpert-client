import { Link } from "react-router-dom";
import moneyBackImg from "/src/assets/others/money-back.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Guarantee = () => {
  return (
    <div className="container max-lg:text-center text-white bg-primary shadow-xl py-6 rounded-xl flex max-md:flex-col items-center justify-between gap-2">
      <div className="flex max-md:flex-col items-center md:gap-8">
        <img src={moneyBackImg} className="lg:w-16 w-14" alt="" />
        <div>
          <h5>100% Money Back Guarantee</h5>
          <p className="text-gray-50">
            We offer 48 hours money back guarantee
          </p>
        </div>
      </div>
      <Link to="/sign-up" className={cn(buttonVariants({ size: "lg", variant:"outline" }))}>
        Sign Up
      </Link>
    </div>
  );
};

export default Guarantee;
