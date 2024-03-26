import { HiTemplate } from "react-icons/hi";
import { MdOutlineElectricBolt, MdPayments } from "react-icons/md";
import { SiSpringsecurity, SiBisecthosting } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="relative text-white lg:h-[calc-(100dvh-64px)] md:h-[700px] h-[621px] bg-gradient-to-r bg-transparent from-[#010313] to-[#0103135a]">
      <div className="absolute top-0 left-0 right-0 h-full bg-slate-950 opacity-45"></div>
      <img
        className="h-full object-cover"
        src="https://storex.com.bd/imgs/pages/hero-storex.png"
        alt=""
      />
      <div className="absolute top-1/2 lg:left-1/4 left-1/4 -translate-x-1/3 -translate-y-1/2 ">
        <p className="lg:text-[45px] text-3xl leading-tight">
          ই-কমার্স ব্যবসা এখন <br />
          হাতের মুঠোয়
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-2 ">
          <li className="inline-flex items-center gap-2">
            <HiTemplate className="text-primary text-2xl" />
            <span>মাল্টি স্টোর টেমপ্লেট</span>
          </li>
          <li className="inline-flex items-center gap-2">
            <SiSpringsecurity className="text-primary text-2xl" /> সিকিউরড
            কাস্টমার ডাটা
          </li>
          <li className="inline-flex items-center gap-2">
            <MdOutlineElectricBolt className="text-primary text-2xl" />{" "}
            সুপারফাস্ট ওয়েব ব্রাউজিং
          </li>
          <li className="inline-flex items-center gap-2">
            <SiBisecthosting className="text-primary text-2xl" />
            হোস্টিং এর কোন ঝামেলা মুক্ত
          </li>
          <li className="inline-flex items-center gap-2">
            <GrSecure className="text-primary text-2xl" />
            ওয়েবসাইটের সর্বোচ্চ সিকিউরিটি
          </li>
          <li className="inline-flex items-center gap-2">
            <FaMoneyCheck className="text-primary text-2xl" /> সব থেক সহজ
            চেক-আউট সিস্টেম
          </li>
          <li className="inline-flex items-center gap-2">
            <MdPayments className="text-primary text-2xl" />
            এক-কালীন ফি ছাড়া মাসিক পেমেন্ট সিস্টেম
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Hero;
