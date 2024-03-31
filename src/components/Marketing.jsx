import { Button } from "./ui/button";

const Marketing = () => {
  return (
    <section id="why-us" className="container lg:pt-28 pt-24">
      <div className="rounded-xl grid lg:grid-cols-2 grid-cols-1  justify-between gap-10 items-center">
        <div className="w-full">
          <h3 className="leading-normal">
            সর্বনিম্ন খরচে সর্বোচ্চ সেল জেনারেট
          </h3>
          <ul className="list-disc grid grid-cols-1 pl-4 gap-4 mt-4 text-slate-800">
            <li>কোডিং দক্ষতা ছাড়াই সাজিয়ে নিন নিজের অনলাইন ওয়েবসাইট</li>
            <li>High-converting E-commerce websites.</li>
            <li>Built-in payments solutions.</li>
            <li>100% Happiness Guarantee</li>
            <li>Social Media Marketing Support</li>
            <li>Search Engine Optimization (SEO) Support</li>
            <li>High-quality inventory management.</li>
            <li>Our 24/7 customer support team is always here to assist</li>
          </ul>
          <Button className="mt-6">Contact Now</Button>
        </div>
        <div className="lg:p-10 p-7 rounded-2xl bg-gradient-to-r from-rose-50/60 via-purple-100/60 to-indigo-50/60 duration-300">
          <img
            className="max-w-2xl w-full rounded-2xl "
            src="/src/assets/others/sm-marketing.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Marketing;
