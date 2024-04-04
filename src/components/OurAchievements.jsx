// import { HiMiniUsers } from "react-icons/hi2";

// import { GrSystem } from "react-icons/gr";
// import { ImHappy2 } from "react-icons/im";
import users from "/src/assets/others/users.png"
import satisfied from "/src/assets/others/smile.png"
import upgrades from "/src/assets/others/software.png"
import laptop from "/src/assets/others/customize.jpg"
const benefits = [
  {
    title: "এক্টিভ ইউজার",
    value: "৩৫০+",
    img: users,
  },
  {
    title: "সেটিস্ফাইড ক্লায়েন্",
    value: "৯৯.৯৯%",
    img: satisfied,
  },
  {
    title: "সিস্টেম আপডেট",
    value: "১৬০+",
    img: upgrades,
  },
]

const OurAchievements = () => {
  return (
    <section className="container flex max-lg:flex-col items-center justify-center lg:gap-14 gap-6 lg:mt-28 mt-24 lg:p-10 sm:p-7 p-5 rounded-xl gap-y-7  bg-gradient-to-r from-indigo-50/60 via-rose-100/60 to-indigo-50/60 duration-300">
      <img
        className="rounded-3xl max-md:max-w-full shadow-lg max-w-lg"
        src={laptop}
        alt=""
      />
      <div className="">
        <h3 className="leading-normal">
          অটোমেশনের মাধ্যমে ব্যবসার সেলসকে করুন গতিশীল
        </h3>
        <p className="text-slate-600 mt-2">
          কোডিং দক্ষতা ছাড়াই সাজিয়ে নিন নিজের অনলাইন শপ, তৈরি করুন আনলিমিটেড
          ল্যান্ডিংপেইজ। শক্তিশালী ফানেল এর মাধ্যমে উপভোগ করুন সর্বোচ্চ কনভার্সন
        </p>
        <div className="mt-10 grid gap-5 grid-cols-2">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className={`border ${
                index == 2 && "col-span-2"
              } flex items-center justify-center gap-2 px-4 py-6 rounded-xl bg-white shadow-sm hover:shadow-md duration-500`}>
              <div className="border rounded-md">
                <img src={benefit?.img} className="text-primary w-8 m-2" />
              </div>
              <div>
                <h4 className="mb-1 text-primary">{benefit?.value}</h4>
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
