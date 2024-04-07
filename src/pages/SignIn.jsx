import { Button, buttonVariants } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import logo from "/src/assets/logos/storexpert-blue.png";
import loginImg from "/src/assets/others/login.svg";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
import BtnSpinner from "@/components/shared/BtnSpinner";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { cn } from "@/lib/utils";

const SignIn = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await fetch("https://store-xpert-server.vercel.app/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);

          if (data?.success) {
            console.log(data?.data?.accessToken);
            localStorage.setItem("storeXpert", data?.data?.accessToken);
            reset();
            toast.success(data?.message);
            navigate("/");
          } else {
            toast.error(data?.message);
          }
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section className="h-dvh select-none">
      <div className="flex items-center justify-center w-full h-full mx-auto relative ">
        {/* form */}
        <div className="lg:w-2/5 w-full mx-3 ">
          <Link to="/" className="absolute top-4 left-4">
            <img className="h-6  block  mr-9" src={logo} alt="StoreXpert" />
          </Link>
          <div className="max-lg:shadow-md  md:p-10 p-4 py-10 rounded-lg">
            <h3 className="text-primary">Sign in to Account</h3>
            <p className="text-slate-600 mt-1">
              Please provide your verified information.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-8 mt-8 w-full sm:max-w-sm">
              {/* email */}
              <div className="w-full">
                <p className="font-semibold text-slate-600">Your Email:</p>
                <label className="flex items-center bg-gray-200 w-full rounded-xl pl-4">
                  {/* <img className="w-12 p-3" src={emailImg} alt="" /> */}
                  <MdOutlineEmail className="w-6 h-6 mr-2 text-primary" />
                  <input
                    className="p-4 bg-gray-200 focus:outline-none w-full rounded-xl"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </label>
                {errors.email && (
                  <p className="text-red-400 text-xs font-semibold text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* password */}
              <div className="w-full">
                <p className="font-semibold text-slate-600">Your Password:</p>
                <label className="flex relative items-center bg-gray-200 w-full rounded-xl pl-4">
                  {/* <img className="w-12 p-3" src={passwordImg} alt="" /> */}
                  <RiLockPasswordLine className="w-6 h-6 mr-2 text-primary" />
                  <input
                    type={passVisible ? "text" : "password"}
                    className="p-4 bg-gray-200 focus:outline-none w-full rounded-xl"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required ",
                    })}
                  />
                  {passVisible ? (
                    <IoMdEyeOff
                      onClick={() => setPassVisible(!passVisible)}
                      className="md:text-2xl text-xl text-slate-500 absolute top-1/2 right-4 -translate-y-1/2"
                    />
                  ) : (
                    <IoMdEye
                      onClick={() => setPassVisible(!passVisible)}
                      className="md:text-2xl text-xl text-slate-500 absolute top-1/2 right-4 -translate-y-1/2"
                    />
                  )}
                </label>
                {errors.password && (
                  <p className="text-red-400 text-xs font-semibold text-left">
                    {errors.password.message}
                  </p>
                )}
                <p className="text-primary font-semibold text-right hover:underline mt-1">Forgot password?</p>
              </div>
              <Button
                
                type="submit"
                disabled={isLoading}
                className={cn(buttonVariants({ size: "lg" }), "md:py-[10px] py-2 w-full")}>
                {isLoading ? <BtnSpinner /> : "Submit"}
              </Button>
            </form>
            <p className="font-medium mt-2 text-slate-600">Don&apos;t have an account? <Link to="/sign-up" className="text-primary font-semibold hover:underline">Sign Up</Link></p>
          </div>
        </div>

        <div className="bg-slate-50 flex flex-col justify-center items-center lg:w-3/5 text-center h-full p-10 max-md:hidden">
          <p className="text-slate-600 font-medium text-lg">Nice to see you again.</p>
          <h2 className="text-primary mt-5">Welcome back!</h2>
          <img className="w-full mx-auto max-w-xl mt-16" src={loginImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
