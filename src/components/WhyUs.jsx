import { HiTemplate } from "react-icons/hi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const features = [
  {
    title: "সবচাইতে সহজ Check Out সিস্টেম",
    desc: "সবচাইতে সহজ Check Out সিস্টেম ব্যবহারের কারনে সেলস ড্রপ হওয়ার সম্ভাবনা সর্বোচ্চ পরিমান কমে আসবে",
    icon: FaMoneyCheck,
  },
  {
    title: "সবচাইতে দ্রুত website Loading",
    desc: "NodeJS, MongoDB, Cloud Server এর সমন্বয়ে তৈরি করা হয়েছে বাংলাদেশের সবথেকে ফাস্ট লোডিং ইকমার্স সল্যুশন",
    icon: MdOutlineElectricBolt,
  },
  {
    title: "সিকিউরড Customer Data",
    desc: "বিজনেসের গোপনীয় সকল ডাটা থাকবে সর্বোচ্চ সুরক্ষিত ও নিরাপদ, যা Storex কর্তৃপক্ষের পক্ষেও অ্যাক্সেস সম্ভব নয়।",
    icon: GrSecure,
  },
  {
    title: "আনলিমিটেড Landing Page",
    desc: "কোডিং দক্ষতা ছাড়াই প্রয়োজনমত যত ইচ্ছা নিজের মত কাস্টমাইজ ডিজাইন ল্যান্ডিংপেইজ তৈরির করার সুযোগ।",
    icon: HiTemplate,
  },
  {
    title: "Customer Support",
    desc: "সাপোর্টের ক্ষেত্রে একবিন্দু অভিযোগের সুযোগ আমরা দিবোনা, এই চ্যালেঞ্জ নিয়ে ওয়ান টু ওয়ান সাপোর্ট প্রদান করা হচ্ছে।",
    icon: BiSupport,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className=" lg:pt-[73px] pt-14  mt-10">
      <div className="py-10 bg-gradient-to-b from-rose-50/60 via-purple-100/60 to-indigo-50/10 duration-300">
        <div className="rounded-xl container flex max-lg:flex-col justify-between gap-10 items-center lg:p-16 sm:p-7 p-5">
          <div>
            <h4 className="leading-normal">
              কেন StoreXpert এর কাছ থেকে ওয়েবসাইট নিবেন?
            </h4>
            <ul className="mt-5 grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <li key={index} className="">
                  <div>
                    <h6>{feature?.title}</h6>
                    <p className="text-slate-600">{feature?.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img
            className="max-w-md w-full rounded-2xl"
            src="/src/assets/others/why-us.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

{
  /* <VerticalTimeline className="text-gray-700">
{features.map((feature, index) => (
  <VerticalTimelineElement
    key={index}
    className="vertical-timeline-element--work "
    contentStyle={{ background: "#fff", color: "rgb(59 130 246)" }}
    contentArrowStyle={{ borderRight: "7px solid #fff" }}
    iconStyle={{ background: "#fff", color: "rgb(59 130 246)" }}
    icon={<feature.icon />}>
    <h4 className="vertical-timeline-element-title">
      {feature?.title}
    </h4>
    <p>{feature?.desc}</p>
  </VerticalTimelineElement>
))}
</VerticalTimeline> */
}
