import { Button } from "./ui/button";
import { PiEye } from "react-icons/pi";
import img1 from "/src/assets/demos/chomotkar.png";
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
    <section id="templates" className="container lg:pt-28 pt-24 text-center">
      <h3>আপনার পছন্দের <span className="text-primary">টেমপ্লেটটি বাছাই করুন</span></h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {demos?.map((demo) => (
          <div key={demo?._id} className="border shadow overflow-hidden rounded-xl">
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
            <div className=" flex items-center justify-center px-2 gap-2 h-20 bg-gradient-to-r from-rose-50 to-indigo-100">
              <p className="text-slate-700 text-left primary-color font-medium text-sm capitalize">
                {demo?.title}
              </p>
              {demo?.url && (
                <Button size="sm" className=" flex gap-2">
                  <PiEye className=" text-lg" />
                  Visit
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
