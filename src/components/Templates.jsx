import { buttonVariants } from "./ui/button";
import { PiEye } from "react-icons/pi";
import img1 from "/src/assets/demos/chomotkar.png";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
// import img2 from "/src/assets/demos/bisrto-boss.png";

const demos = [
  {
    _id: "1",
    title: "E-Commerce easy management (dynamic)",
    img: img1,
    url: "https://chomotkarfashion-67485.web.app/",
  },
  {
    _id: "2",
    title: "E-Commerce easy management (dynamic) E-Commerce easy",
    img: img1,
    url: "https://chomotkarfashion-67485.web.app/",
  },
  {
    _id: "3",
    title: "E-Commerce easy management (dynamic)",
    img: null,
    url: null,
  },
];

const Templates = () => {
  return (
    <section id="templates" className="bg-secondary">
      <div className="container lg:py-28 py-24 text-center">
        <h3>
          আমাদের <span className="text-primary">টেমপ্লেট</span>
        </h3>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {demos?.map((demo) => (
            <div
              key={demo?._id}
              className="border shadow overflow-hidden rounded-xl">
              {demo?.img ? (
                <>
                  <div className=" h-96 overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-top hover:object-bottom duration-[10000ms]"
                      src={demo?.img}
                      alt={demo?.title}
                    />
                  </div>
                </>
              ) : (
                <div className="rounded-2xl m-2 h-[368px] flex justify-center items-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100">
                  <span className="text-slate-700 drop-shadow-md text-lg">
                    Coming soon...
                  </span>
                </div>
              )}
              <div className=" flex items-center justify-center px-2 gap-2 h-20 bg-gradient-to-r from-indigo-50 to-secondary">
                <p className="text-slate-700 text-left primary-color font-medium text-sm capitalize">
                  {demo?.title}
                </p>
                {demo?.url && (
                  <Link
                    to={demo?.url}
                    target="blank"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "flex gap-2"
                    )}>
                    <PiEye className=" text-lg" />
                    Visit
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
