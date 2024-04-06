import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import logoImg from "/src/assets/logos/logo-white-blue.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Guarantee from "../Guarantee";

const links = [
  { text: "Terms of Use", url: "/terms-of-use" },
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Refund Policy", url: "/refund-policy" },
  { text: "Terms & Conditions of Sales", url: "/terms-and-conditions" },
];

const contactInfo = [
  {
    icon: IoCall,
    text: "+880 1950-606020",
  },
  {
    icon: MdEmail,
    text: "apurbahasanj@gmail.com",
  },
  {
    icon: FaLocationDot,
    text: "R-25 H-10 Block-Alobdhi Road Pallabi Mirpur-12 Dhaka 1216",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact-us" className="bg-slate-900 text-white ">
      <div className=" container relative">
        <div className="absolute lg:-top-16 max-md:-top-28 right-3 left-3 z-10">
         <Guarantee/>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 justify-between py-20">
          <div>
            <img className="lg:h-8 h-7 mr-9" src={logoImg} alt="StoreXpert" />
            <p className="leading-normal text-base mt-2">
              স্থায়ী বিজনেস পরিকল্পনা সফল করতে অনলাইন শপ
            </p>
            <p className="mt-2">
              ট্রাফিককে কাস্টমারে কনভার্ট করার জন্য ডিজাইনকরা সর্বাধুনিক ফানেল ও
              সর্বাধিক সিকিউরিটিযুক্ত অনলাইন শপ বুঝে নিতে নিচের বাটনে ক্লিক
              করুন।
            </p>
            <div className="flex items-center gap-5 mt-5">
              <div className="text-primary hover:text-white">
                <FaFacebookSquare className="text-3xl" />
              </div>
              <div className="text-primary hover:text-white ">
                <AiFillInstagram className="text-3xl" />
              </div>
              <div className="text-primary hover:text-white ">
                <HiUserGroup className="text-3xl" />
              </div>
            </div>
          </div>
          <div className="md:mx-auto">
            <h6 className="text-primary">Important Links</h6>
            <ul className="mt-4 grid grid-cols-1 items-start gap-[6px]">
              {links.map((link, index) => (
                <li key={index} className="hover:underline">
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h6 className="text-primary">Contact Us</h6>
            <ul className="mt-4 grid grid-cols-1 items-start gap-[6px]">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-baseline gap-2">
                  <info.icon className="text-primary text-lg" />
                  <p>{info.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 font-medium py-4 border-t-2 border-slate-300">
        <div className="container flex max-md:flex-col gap-y-3 items-center justify-between">
          <p>
            Copyright &#169; {currentYear} StoreXpert.com. All Rights Reserved.
          </p>
          <div className="whitespace-nowrap">
            <span>Designed & Developed by </span>
            <Link
              to="https://apurbahasanj.netlify.app/"
              target="blank"
              title="CyberFlux Ltd."
              className="hover:underline text-primary hover:text-red-500">
              CyberFlux Ltd.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
