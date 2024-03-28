import { HashLink as NavLink } from "react-router-hash-link";
import { Button } from "@/components/ui/button";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";

import { GiCrossedBones } from "react-icons/gi";

const navItems = [
  {
    id: "templates",
    name: "Templates",
  },
  {
    id: "why-us",
    name: "Why Us?",
  },
  {
    id: "setup-process",
    name: "Setup Process",
  },
  {
    id: "features",
    name: "Features",
  },
  {
    id: "contact-us",
    name: "Contact Us",
  },
];

const BarItems = () => (
  <>
    <img
      className="lg:h-8 lg:block hidden h-7 mr-9"
      src="/src/assets/logos/logo-orange.png"
      alt="StoreXpert"
    />
    <div className="flex lg:items-center justify-center items-start lg:flex-row flex-col gap-2">
      {navItems.map((item) => (
        <NavLink key={item?.id} to={"#" + item?.id} smooth className="active">
          {item?.name}
        </NavLink>
      ))}
    </div>
    <div className="lg:mt-0 mt-8 flex items-center lg:flex-row flex-col-reverse lg:justify-between gap-5">
      <div className="flex items-center gap-3">
        <BiSolidPhoneCall className="text-primary lg:text-4xl text-2xl" />
        <p className="lg:text-xl text-base font-medium">+880 1950-606020</p>
      </div>
      <Button className="lg:w-fit w-full">Login</Button>
    </div>
  </>
);

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="bg-white shadow-md py-5 sticky top-0 left-0 right-0 z-10">
      <div className="container">
        <div className="lg:flex hidden items-center justify-between">
          <BarItems />
        </div>

        {/* small device */}
        <div className="lg:hidden flex items-center justify-between">
          <img
            className="lg:h-8 h-7 mr-9"
            src="/src/assets/logos/logo-orange.png"
            alt="StoreXpert"
          />
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
        <div
          onClick={() => setShowNavbar(!showNavbar)}
          className={`lg:hidden w-full z-10 ${
            showNavbar ? "bg-black bg-opacity-10 fixed top-[68px] left-0 " : ""
          } h-full duration-500`}>
          <div
            className={`bg-white ml-auto w-1/2 h-full shadow-md py-10 px-8 fixed top-[68px] ${
              showNavbar ? "right-0 left-0" : "-right-[600px]"
            } duration-300`}>
            <BarItems />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
