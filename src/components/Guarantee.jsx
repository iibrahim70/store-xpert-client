import { Link } from "react-router-dom";
import successImg from "/src/assets/others/success.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Guarantee = () => {
  return (
    <div className="container max-lg:text-center text-gray-300 bg-slate-800 shadow-xl py-6 rounded-xl flex max-md:flex-col items-center justify-between gap-2">
      <div className="flex max-md:flex-col items-center md:gap-8">
        <img src={successImg} className="lg:w-12 md:w-8 w-6" alt="" />
        <div>
          <h5>100% success guarantee</h5>
          <p className="text-gray-400">
            we offer 48 hours money back guarantee
          </p>
        </div>
      </div>
      <Link to="/sign-up" className={cn(buttonVariants({ size: "lg", variant:"outline" }), "")}>
        Sign Up
      </Link>
    </div>
  );
};

export default Guarantee;
