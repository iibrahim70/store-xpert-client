import { Button } from "./ui/button";
import { IoCheckmarkCircle } from "react-icons/io5";
import ladyImg from "/src/assets/others/sm-marketing.jpg";

const Marketing = () => {
  const services = [
    {
      title: "কোডিং দক্ষতা ছাড়াই সাজিয়ে নিন নিজের অনলাইন ওয়েবসাইট",
    },
    {
      title: "High-converting E-commerce websites.",
    },
    {
      title: "Built-in payments solutions.",
    },
    {
      title: "100% Happiness Guarantee",
    },
    {
      title: "Social Media Marketing Support",
    },
    {
      title: "Search Engine Optimization (SEO) Support",
    },
    {
      title: "High-quality inventory management.",
    },
    {
      title: "Our 24/7 customer support team is always here to assist",
    },
  ];

  return (
    <section id="why-us" className="py-10">
      <div className="container rounded-xl grid lg:grid-cols-2 grid-cols-1  justify-between gap-10 items-center">
        <div className="w-full">
          <h3 className="leading-normal">
            সর্বনিম্ন খরচে সর্বোচ্চ সেল জেনারেট
          </h3>
          <ul className="grid grid-cols-1 gap-4 mt-4 text-slate-800">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <IoCheckmarkCircle className="text-primary w-6 h-6" />

                <p>{service.title}</p>
              </li>
            ))}
          </ul>
          <Button className="mt-6">Contact Now</Button>
        </div>
        <div className="lg:p-10 p-7 rounded-2xl">
          <img
            className="max-w-2xl w-full rounded-2xl "
            src={ladyImg}
            alt="lady img"
          />
        </div>
      </div>
    </section>
  );
};

export default Marketing;
