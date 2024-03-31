import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact-us" className="lg:pt-28 pt-32 ">
      <div className="bg-slate-900 text-white">
        <div className=" container  relative">
          <div className="absolute -top-12 left-0 right-0 bg-linea text-black py-6 mx-5 rounded-xl flex max-md:flex-col  items-center justify-center gap-5 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100">
            <h3>Our Communities: </h3>
            <div className="flex items-center gap-5">
              <div className="hover:text-[#6C63FF]">
                <FaFacebookSquare className=" text-3xl" />
              </div>
              <div className="hover:text-[#6C63FF] ">
                <AiFillInstagram className=" text-3xl" />
              </div>
              <div className="hover:text-[#6C63FF] ">
                <HiUserGroup className=" text-3xl" />
              </div>
            </div>
          </div>

          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 justify-between py-20">
            <div>
              <img
                className="lg:h-8 h-7 mr-9"
                src="/src/assets/logos/logo-white-blue.png"
                alt="StoreXpert"
              />
              <p className="leading-normal text-base mt-2">
                স্থায়ী বিজনেস পরিকল্পনা সফল করতে অনলাইন শপ
              </p>
              <p className="mt-2">
                ট্রাফিককে কাস্টমারে কনভার্ট করার জন্য ডিজাইনকরা সর্বাধুনিক ফানেল
                ও সর্বাধিক সিকিউরিটিযুক্ত অনলাইন শপ বুঝে নিতে নিচের বাটনে ক্লিক
                করুন।
              </p>
            </div>
            <div className="md:mx-auto">
              <h6>Information</h6>
              <ul className="mt-4">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions of Sales</li>
              </ul>
            </div>

            <div className="">
              <h6>Contact Us</h6>
              <ul className="mt-4 grid grid-cols-1 items-start gap-[6px]">
                <li className="flex items-baseline gap-2">
                  <IoCall className="text-primary text-lg" />
                  <p>+880 1950-606020</p>
                </li>
                <li className="flex items-baseline gap-2">
                  <MdEmail className="text-primary text-lg" />
                  <p>apurbahasanj@gmail.com</p>
                </li>
                <li className="flex items-baseline gap-2 ">
                  <FaLocationDot className="text-primary text-lg" />
                  <p>
                    R-25 H-10 Block-Alobdhi Road Pallabi Mirpur-12 Dhaka 1216
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-950  font-medium py-4 border-t-2 border-slate-300">
          <div className=" container flex max-md:flex-col gap-y-3 items-center justify-between">
            <p>
              Copyright &#169; {currentYear} StoreXpert.com. All Rights
              Reserved.{" "}
            </p>
            <Link
              to="https://apurbahasanj.netlify.app/"
              target="blank"
              title="CyberFlux Ltd."
              className="hover:underline hover:text-red-400">
              Website developed by CyberFlux Ltd.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
