import { HiTemplate } from "react-icons/hi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const features = [
  {
    title: "সবচাইতে সহজ Check Out সিস্টেম",
    description:
      "সবচাইতে সহজ Check Out সিস্টেম ব্যবহারের কারনে সেলস ড্রপ হওয়ার সম্ভাবনা সর্বোচ্চ পরিমান কমে আসবে",
    icon: FaMoneyCheck,
  },
  {
    title: "সবচাইতে দ্রুত website Loading",
    description:
      "NodeJS, MongoDB, Cloud Server এর সমন্বয়ে তৈরি করা হয়েছে বাংলাদেশের সবথেকে ফাস্ট লোডিং ইকমার্স সল্যুশন",
    icon: MdOutlineElectricBolt,
  },
  {
    title: "সিকিউরড Customer Data",
    description:
      "বিজনেসের গোপনীয় সকল ডাটা থাকবে সর্বোচ্চ সুরক্ষিত ও নিরাপদ, যা Storex কর্তৃপক্ষের পক্ষেও অ্যাক্সেস সম্ভব নয়।",
    icon: GrSecure,
  },
  {
    title: "আনলিমিটেড Landing Page",
    description:
      "কোডিং দক্ষতা ছাড়াই প্রয়োজনমত যত ইচ্ছা নিজের মত কাস্টমাইজ ডিজাইন ল্যান্ডিংপেইজ তৈরির করার সুযোগ।",
    icon: HiTemplate,
  },
  {
    title: "Customer Support",
    description:
      "সাপোর্টের ক্ষেত্রে একবিন্দু অভিযোগের সুযোগ আমরা দিবোনা, এই চ্যালেঞ্জ নিয়ে ওয়ান টু ওয়ান সাপোর্ট প্রদান করা হচ্ছে।",
    icon: BiSupport,
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="container lg:pt-28 pt-24">
      <div className="text-center border-orange-500 bg-orange-50/50 border-x-8 rounded-md pl-3 py-1 mb-10">
        {/* <p className="text-secondary text-lg">Take a look</p> */}
        <h3 className="mt-2 leading-normal">
          কেন <span className="text-primary">StoreXpert</span> এর কাছ থেকে
          ওয়েবসাইট নিবেন?
        </h3>
      </div>

      {/* all about us */}
      <VerticalTimeline className="text-gray-700">
        {features.map((feature, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work "
            contentStyle={{ background: "rgb(255 247 237)", color: "#151515" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(255 247 237)" }}
            iconStyle={{ background: "rgb(255 247 237)", color: "#151515" }}
            icon={<feature.icon className="text-orange-500"/>}>
            <h4 className="vertical-timeline-element-title">
              {feature?.title}
            </h4>
            <p>{feature?.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default WhyUs;
