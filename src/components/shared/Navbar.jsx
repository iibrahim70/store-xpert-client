import { HashLink as NavLink } from "react-router-hash-link";
import { Button, buttonVariants } from "@/components/ui/button";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import logo from "/src/assets/logos/storexpert-blue.png";

import { GiCrossedBones } from "react-icons/gi";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  {
    id: "templates",
    name: "Templates",
  },
  {
    id: "why-us",
    name: "Why Us",
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

const BarItems = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("storeXpert")
  );

  // useEffect(() => {
  //   setAccessToken(localStorage.getItem("storeXpert"));
  // }, [accessToken]);

  // Define the sign-out function
  const handleSignOut = () => {
    localStorage.removeItem("storeXpert");
    setAccessToken(null);
  };
  return (
    <>
      <img
        className="lg:h-6  lg:block hidden mr-9"
        src={logo}
        alt="StoreXpert"
      />
      <div className="flex lg:items-center justify-center items-start max-lg:flex-col lg:gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item?.id}
            to={`/#${item?.id}`}
            smooth
            className="active">
            {item?.name}
          </NavLink>
        ))}
      </div>
      <div className="lg:mt-0 mt-8 flex items-center lg:flex-row flex-col-reverse lg:justify-between gap-5">
        <div className="flex items-center gap-3">
          <BiSolidPhoneCall className="text-primary lg:text-3xl text-2xl" />
          <p className="lg:text-lg text-base font-medium">+880 1950-606020</p>
        </div>
        {accessToken ? (
          <Button onClick={handleSignOut} size="" className="max-lg:w-full">
            Sign Out
          </Button>
        ) : (
          <Link
            to="/sign-in"
            className={cn(buttonVariants({ size: "lg" }), "max-lg:w-full")}>
            <span className="-mt-[3px]">Login</span>
          </Link>
        )}
      </div>
    </>
  );
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 76) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` py-4 sticky top-0 left-0 right-0 z-20 duration-1000 ${
        scroll ? "shadow-md bg-white" : "bg-linear"
      } `}>
      <div className="container">
        <div className="lg:flex hidden items-center justify-between">
          <BarItems />
        </div>

        {/* small device */}
        <div className="lg:hidden flex items-center justify-between">
          <img className="lg:h-6 h-5 mr-9" src={logo} alt="StoreXpert" />
          <Button
            size="icon"
            className="lg:hidden ml-auto"
            onClick={() => setShowNavbar(!showNavbar)}>
            {showNavbar ? (
              <GiCrossedBones className="p-[1px]" />
            ) : (
              <HiMiniBars3CenterLeft className="rotate-180 " />
            )}
          </Button>
        </div>

        <div
          onClick={() => setShowNavbar(!showNavbar)}
          className={`lg:hidden w-full z-10 ${
            showNavbar ? "bg-black bg-opacity-10 fixed top-[60px] left-0 " : ""
          } h-full duration-500`}>
          <div
            className={`bg-white ml-auto w-1/2 h-full shadow-md py-10 px-3 fixed top-[60px] ${
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
