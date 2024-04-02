import { Button } from "./ui/button";
import { PiEye } from "react-icons/pi";
import img1 from "/src/assets/demos/chomotkar.png";
// import img2 from "/src/assets/demos/bisrto-boss.png";

const demos = [
  {
    _id: "1",
    title: "template- 1",
    img: img1,
  },
  {
    _id: "2",
    title: "template- 2",
    img: img1,
  },
  {
    _id: "3",
    title: "template- 3",
    img: null,
  },
];

const Demos = () => {
  return (
    <section id="templates" className="container lg:pt-28 pt-24 text-center">
      <h3>আপনার পছন্দের টেমপ্লেটটি বাছাই করুন</h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {demos?.map((demo) => (
          <div key={demo?._id} className="">
            <p className="text-slate-700 primary-color bg-blue-100 font-medium text-xl capitalize mb-3">
              {demo?.title}
            </p>
            <div className="h-96 relative overflow-hidden border shadow">
              {demo?.img ? (
                <>
                  <img
                    className="w-full h-full object-cover object-top hover:object-bottom duration-[10000ms]"
                    src={demo?.img}
                    alt={demo?.title}
                  />
                  <Button className="absolute bottom-0 right-0 rounded-b-none rounded-tr-none flex gap-2">
                    <PiEye className=" text-2xl" />
                    Visit
                  </Button>
                </>
              ) : (
                <div className="rounded-2xl m-2 h-full flex justify-center items-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100">
                  <span className="text-slate-700 drop-shadow-md text-lg">
                    Coming soon...
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demos;
