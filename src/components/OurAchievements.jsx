import { HiMiniUsers } from "react-icons/hi2";

import { GrSystem } from "react-icons/gr";
import { ImHappy2 } from "react-icons/im";


const benefits = [
  {
    title: "এক্টিভ ইউজার",
    value: "৩৫০+",
    icon: HiMiniUsers,
  },
  {
    title: "সেটিস্ফাইড ক্লায়েন্",
    value: "৯৯.৯৯%",
    icon: ImHappy2,
  },
  {
    title: "সিস্টেম আপডেট",
    value: "১৬০+",
    icon: GrSystem,
  },
];

const OurAchievements = () => {
  return (
    <section className="container flex items-center justify-center lg:gap-14 gap-6 lg:mt-28 mt-24">
      <img
        className="rounded-3xl max-lg:hidden shadow-lg max-w-lg"
        src="/src/assets/others/achievements.jpg"
        alt=""
      />
      <div className="">
        <h3 className="leading-normal">
          অটোমেশনের মাধ্যমে ব্যবসার{" "}
          <span className="text-primary">সেলসকে করুন গতিশীল</span>
        </h3>
        <p className="text-secondary mt-2">
          কোডিং দক্ষতা ছাড়াই সাজিয়ে নিন নিজের অনলাইন শপ, তৈরি করুন আনলিমিটেড
          ল্যান্ডিংপেইজ। শক্তিশালী ফানেল এর মাধ্যমে উপভোগ করুন সর্বোচ্চ কনভার্সন
        </p>
        <div className="mt-10 grid gap-5 grid-cols-2 drop-shadow">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className={`border ${
                index == 2 && "col-span-2"
              } shadow-md flex items-center justify-center gap-2 px-4 py-6 rounded-xl bg-white hover:bg-orange-50/80 duration-500`}>
              <div className="border rounded-md">
              <benefit.icon className="text-primary md:text-4xl text-2xl sm:m-3 m-2" />
              </div>
              <div>
                <h4 className="mb-1">{benefit?.value}</h4>
                <p className="drop-shadow-lg text-slate-600">
                  {benefit?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
