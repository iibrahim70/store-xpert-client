import { Button } from "./ui/button";
import checkImg from "/src/assets/icons/check.png";
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
    <section
      id="why-us"
      className="lg:mt-24 mt-16 py-10 bg-gradient-to-br from-rose-50/60 via-purple-50/60 to-indigo-50/10 duration-300">
      <div className="container rounded-xl grid lg:grid-cols-2 grid-cols-1  justify-between gap-10 items-center">
        <div className="w-full">
          <h3 className="leading-normal">
            সর্বনিম্ন খরচে সর্বোচ্চ সেল জেনারেট
          </h3>
          <ul className="grid grid-cols-1 gap-4 mt-4 text-slate-800">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <img className="w-6" src={checkImg} alt="lady img" />
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
