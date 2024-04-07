import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

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
    <section className="lg:py-24 pt-16 pb-24 bg-secondary z-0">
      <h2 className="text-center text-primary">Testimonials</h2>
      <Marquee className="" pauseOnHover={true} autoFill={true} speed={60}>
        <div className="flex flex-col flex-wrap overflow-visible lg:gap-6 gap-5 items-center justify-center h-[550px] w-full pr-48 py-10">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial?._id}
              className="h-fit max-w-80 w-full py-6 p-5 rounded-lg shadow hover:shadow-2xl duration-500 bg-white scale-100 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="bg-slate-500 md:w-10 md:h-10 w-8 h-8 md:p-2 p-1 rounded-full text-white font-bold text-center">
                  {testimonial?.name.split("")[0]}
                </div>
                <div className="flex items-center gap-1">
                  {/* <ReactStars
                  classNames="bg-green-300"
                    count={5}
                    value={testimonial?.rating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  /> */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="p-[2px] drop-shadow-md">
                      <FaStar
                        className={`${
                          index < testimonial?.rating
                            ? "text-yellow-500"
                            : "text-gray-600"
                        } text-lg`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold my-2">{testimonial?.name}</p>
                <p className=" md:text-base text-slate-600 sm:text-sm text-xs">
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
