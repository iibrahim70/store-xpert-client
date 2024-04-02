import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("https://store-xpert-server.vercel.app/api/v1/testimonials")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data.data);
      });
  }, []);


  return (
    <section className="lg:mt-24 mt-16 py-10 bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50">
      <h2 className="text-center">Testimonials</h2>
      <Marquee className="" pauseOnHover={true} autoFill={true} speed={20}>
        <div className="flex flex-col flex-wrap overflow-visible lg:gap-6 gap-5 items-center justify-center h-[550px] w-full pr-48 py-10">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial?._id}
              className="h-fit max-w-80 w-full py-6 p-5 rounded-lg shadow hover:shadow-2xl duration-500 bg-white scale-100 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="bg-slate-500 w-10 h-10 p-2 rounded-full text-white font-bold text-center">
                  {testimonial?.name.split("")[0]}
                </div>
                <p>Ratings:{testimonial?.rating}</p>
              </div>
              <div>
                <p className="text-sm font-bold my-2">{testimonial?.name}</p>
                <p>
                  &quot;
                  {testimonial?.testimonial.length > 130
                    ? testimonial?.testimonial.substring(0, 130) + "..."
                    : testimonial?.testimonial}
                  &quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
