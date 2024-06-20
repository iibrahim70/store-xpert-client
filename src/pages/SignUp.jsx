import { Button, buttonVariants } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "/src/assets/others/sign_up.svg";
// import userImg from "/src/assets/icons/user.png";
// import phoneImg from "/src/assets/icons/phone.png";
// import emailImg from "/src/assets/icons/email.png";
// import passwordImg from "/src/assets/icons/password.png";
import logo from "/src/assets/logos/storexpert-blue.png";
import { FaRegUser } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import BtnSpinner from "@/components/shared/BtnSpinner";
import { cn } from "@/lib/utils";

const SignUp = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    try {
      fetch("https://store-xpert-server.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            reset();
            toast.success(data.message);
            navigate("/sign-in");
          } else {
            toast.error(data.message);
          }
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section className="h-dvh select-none">
      <div className="flex items-center justify-center w-full h-full mx-auto relative">
        <Link to="/" className="absolute top-4 left-4">
          <img className="h-6  block  mr-9" src={logo} alt="StoreXpert" />
        </Link>
        <div className="bg-slate-50 lg:w-3/5 flex flex-col justify-center items-center text-center h-full p-10 max-md:hidden">
          <p className="text-slate-600 font-medium text-lg">
            Nice to see you again.
          </p>
          <h2 className="text-primary mt-5">Welcome back!</h2>
          <img
            className="w-full mx-auto max-w-xl mt-16"
            src={loginImg}
            alt=""
          />
        </div>

        {/* sign up form */}
        <div className="lg:w-2/5 w-full max-lg:shadow-md md:p-10 p-4 py-10 mx-3 rounded-lg ">
          <h3 className="text-primary max-md:mt-8">Create Account</h3>
          <p className="text-slate-600 mt-1">
            Please provide your verified information.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-8 mt-8 w-full sm:max-w-sm">
            {/* name */}
            <div className="w-full">
              <label className="flex items-center bg-gray-200 w-full rounded-xl pl-4">
                {/* <img className="w-12 p-2" src={userImg} alt="" /> */}
                <FaRegUser className="w-5 h-5 mr-2 text-primary" />
                <input
                  type="text"
                  className="p-4 bg-gray-200 focus:outline-none w-full rounded-xl"
                  placeholder="Name"
                  {...register("fullName", { required: true })}
                />
              </label>
              {errors.fullName && (
                <p className="text-red-400 text-xs font-semibold text-left">
                  Name is required
                </p>
              )}
            </div>
            {/* phone */}
            <div className="w-full">
              <label className="flex items-center bg-gray-200 w-full rounded-xl pl-4">
                {/* <img className="w-11 p-2" src={phoneImg} alt="" /> */}
                <BsTelephone className="w-6 h-6 mr-2 text-primary" />
                <input
                  type="text"
                  className="p-4 bg-gray-200 focus:outline-none w-full rounded-xl"
                  placeholder="Phone"
                  {...register("phoneNumber", {
                    required: "Phone is required",
                    minLength: {
                      value: 11,
                      message: "Phone number must be 11 characters long",
                    },
                  })}
                />
              </label>
              {errors.phoneNumber && (
                <p className="text-red-400 text-xs font-semibold text-left">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* email */}
            <div className="w-full">
              <label className="flex items-center bg-gray-200 w-full rounded-xl pl-4">
                {/* <img className="w-12 p-3" src={emailImg} alt="" /> */}
                <MdOutlineEmail className="w-6 h-6 mr-2 text-primary" />
                <input
                  type="email"
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
              <label className="flex relative items-center bg-gray-200 w-full rounded-xl pl-4">
                {/* <img className="w-12 p-3" src={passwordImg} alt="" /> */}
                <RiLockPasswordLine className="w-6 h-6 mr-2 text-primary" />
                <input
                  type={passVisible ? "text" : "password"}
                  className="p-4 bg-gray-200 focus:outline-none w-full rounded-xl"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least 8 characters, one special character, and one number",
                    },
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
            </div>

            {/* Confirm Password */}
            {/* <div className="w-full">
            <label className="flex items-center bg-gray-200 w-full">
              <img className="w-12 p-3" src={passwordImg} alt="" />
              <input
                type="password"
                className="p-4 bg-gray-200 focus:outline-none w-full"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs font-semibold text-left">
                Confirm password is required
              </p>
            )}
          </div> */}

            <Button
              size="lg"
              type="submit"
              disabled={isLoading}
              className={cn(
                buttonVariants({ size: "lg" }),
                "md:py-[10px] py-2 w-full"
              )}>
              {isLoading ? <BtnSpinner /> : "Submit"}
            </Button>
          </form>
          <p className="font-medium mt-2 text-slate-600">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-primary font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
