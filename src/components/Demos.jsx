import { Button } from "./ui/button";
import { PiEye } from "react-icons/pi";

const demos = [
  {
    _id: "1",
    title: "template- 1",
    img: "/src/assets/demos/chomotkarfashion.png",
  },
  {
    _id: "2",
    title: "template- 2",
    img: "/src/assets/demos/bisrto-boss.png",
  },
  {
    _id: "3",
    title: "template- 3",
    img: "/src/assets/demos/espresso-emporium.png",
  },
  {
    _id: "4",
    title: "template- 4",
    img: null,
  },
  {
    _id: "5",
    title: "template- 5",
    img: null,
  },
  {
    _id: "6",
    title: "template- 6",
    img: null,
  },
];

{
  /* <div className="overflow-hidden relative transition duration-500 transform hover:-translate-y-2 rounded-md shadow-lg hover:shadow-2xl"> */
}

// <div className="bg-black px-6 py-4 opacity-0 hover:opacity-100 bg-opacity-70 inset-0 transition-opacity duration-400 text-gray-300 absolute flex flex-col">

const Demos = () => {
  return (
    <section id="templates" className="container lg:pt-28 pt-24 text-center">
      <h3>
        আপনার পছন্দের <span className="text-primary">টেমপ্লেটটি </span>বাছাই
        করুন
      </h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {demos?.map((demo) => (
          <div key={demo?._id} className="">
            <p className="text-slate-700 bg-gray-300 font-medium text-xl capitalize mb-3">
              {demo?.title}
            </p>
            <div className="lg:h-48 h-60 relative overflow-hidden border shadow">
              {demo?.img ? (
                <>
                  <img
                    className="w-full h-full object-cover object-top"
                    src={demo?.img}
                    alt={demo?.title}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 top-0 opacity-0 hover:opacity-100`}>
                    <div className="absolute bottom-0 left-0 right-0 py-3 pr-5 flex gap-4 items-center justify-end backdrop-blur-lg">
                      <div>
                        <PiEye className="border hover:border-orange-200 text-white hover:text-orange-400 rounded-md p-2 text-4xl"/>
                      </div>
                      <Button size="sm">Add template</Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-orange-50 rounded-2xl m-2 h-full flex justify-center items-center">
                  <span className="text-slate-700 drop-shadow-md">
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
