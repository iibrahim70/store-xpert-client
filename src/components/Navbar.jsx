import { HashLink as NavLink } from "react-router-hash-link";
import { Button } from "@/components/ui/button";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";

import { GiCrossedBones } from "react-icons/gi";

const navItems = [
  {
    id: "why-storexpert",
    name: "Why StoreXpert ?",
  },
  {
    id: "templates",
    name: "Templates",
  },
  {
    id: "pricing",
    name: "Pricing",
  },
  {
    id: "contact-us",
    name: "Contact Us",
  },
  {
    id: "view-demo",
    name: "View Demo",
  },
];

const BarItems = () => (
  <>
    <div className="flex lg:items-center justify-center items-start lg:flex-row flex-col gap-2">
      {navItems.map((item) => (
        <NavLink key={item?.id} to={"#" + item?.id} smooth className="active">
          {item?.name}
        </NavLink>
      ))}
    </div>
    <div className="lg:mt-0 mt-8 flex items-center lg:flex-row flex-col-reverse lg:justify-between gap-5">
      <div className="flex items-center gap-3">
        <BiSolidPhoneCall className="text-orange-500 lg:text-4xl text-2xl" />
        <p className="lg:text-xl text-base font-medium">+880 1950-606020</p>
      </div>
      <Button>Contact</Button>
    </div>
  </>
);

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="bg-white py-5">
      <div className="container flex items-center ">
        <img
          className="lg:h-8 h-7 mr-9"
          src="/src/assets/logos/logo-orange.png"
          alt="StoreXpert"
        />

        <div className="lg:flex w-full hidden items-center justify-between">
          <BarItems />
        </div>

        {/* small device */}
        <div
          className={`lg:hidden w-full ${
            showNavbar ? "bg-black bg-opacity-10 fixed top-16 left-0 " : ""
          } h-full duration-500`}>
          <div
            className={`bg-white ml-auto w-2/3 h-full shadow-md py-10 px-8 fixed top-16 ${
              showNavbar ? "right-0 left-0" : "-right-[600px]"
            } duration-300`}>
            <BarItems />
          </div>
        </div>

        <Button
          size="icon"
          className="lg:hidden ml-auto"
          onClick={() => setShowNavbar(!showNavbar)}>
          {showNavbar ? (
            <GiCrossedBones />
          ) : (
            <HiMiniBars3CenterLeft className="rotate-180 " />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
